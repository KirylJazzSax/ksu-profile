const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const Repository = require('../components/InFileRepository');

let youtubeReposiroty = new Repository(fs, 'server/db/youtube.json');
let audioReposiroty = new Repository(fs, 'server/db/audio.json'); 

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './dist/uploads');
    },
    filename: (req, file, cb) => {
        let name = 'audio_' + Date.now() + '.mp3'; 
        let data = {
            audioName: file.originalname,
            audioNameGenerated: name,
            artist: req.body.artist,
            title: req.body.title
        }

        audioReposiroty.save(data)
        cb(null, name)
    }
});

let upload = multer({
    storage: storage
});

router.get('/audios', (req, res) => {
    try {
        upload.single('audio')
    } catch (err) {
        console.log(err)
    }
    res.json(audioReposiroty.getData());
});

router.post('/upload', upload.single('audio'), (req, res) => {
    res.json({message: 'File uploaded!'});
});

router.get('/youtube', (req, res) => {
    res.json(youtubeReposiroty.getData());
});

router.post('/youtube', (req, res) => {
    if (!req.body.videoId) {
        res.status = 400;
        return res.json({message: 'We need youtube video id'});
    }

    let data = {
        video: req.body.videoId,
    }

    if (youtubeReposiroty.save(data)) {
        return res.json({message: 'Link uploaded!'});
    }

    res.status = 500;
    return res.json({message: 'Something wrong'});
});

module.exports = router;