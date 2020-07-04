const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const Repository = require('../components/InFileRepository');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: 'AKIAJTD6OC4XXQUIPFEA',
    secretAccessKey: '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'
});
const awsS3 = AWS.S3;
let youtubeRepository = new Repository(fs, 'server/db/youtube.json');

let upload = multer();

router.get('/audios', (req, res) => {
    let params = {
        Bucket: 'ksu-profile',
    }

    s3.listObjects(params, (err, data) => {
        if (err) {
            console.log(err)
            res.setStatus(500)
            res.json({message: 'I guess something wrong with server'})
        }

        res.json(data.Contents)
    })
});

router.post('/upload', upload.single('audio'), (req, res) => {
    let key = Date.now()
    let params = {
        Bucket: 'ksu-profile',
        Key: key,
        Body: req.file.buffer,
        ACL:'public-read'
    }
    s3.upload(params, (err, data) => {
        if (err) {
            console.log(err)
            res.setStatus(500)
            res.json({message: 'File was not uploaded for some reason'})
            return
        }

        res.json({message: 'File uploaded!'});
    })
});

router.get('/youtube', (req, res) => {
    res.json(youtubeRepository.getData());
});

router.post('/youtube', (req, res) => {
    if (!req.body.videoId) {
        res.status = 400;
        return res.json({message: 'We need youtube video id'});
    }

    let data = {
        video: req.body.videoId,
    }

    if (youtubeRepository.save(data)) {
        return res.json({message: 'Link uploaded!'});
    }

    res.status = 500;
    return res.json({message: 'Something wrong'});
});

module.exports = router;
