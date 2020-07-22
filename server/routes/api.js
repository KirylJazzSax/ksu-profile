const express = require('express');
const router = express.Router();
const fs = require('fs');
const audioPath = 'dist/audio';
const videoPath = 'dist/video';

router.get('/audios', (req, res) => {
    let audios = [];
    let audioPattern = /(\.mp3|\.wav)$/;

    fs.readdir(audioPath, (err, files) => {
        if (!files) {
            return;
        }
        files.forEach(file => {
            if (file.match(audioPattern)) {
                let audio = {audio: 'audio/' + file};

                let n = file.indexOf('.');
                let name = file.substring(0, n);
                let titlePath = audioPath + `/${name}-title.txt`;
                let descriptionPath = audioPath + `/${name}-description.txt`;
                let imagePath = audioPath + `/${name}.jpg`;

                if (fs.existsSync(titlePath)) {
                    audio.title = fs.readFileSync(titlePath, 'utf-8');
                } 
                
                if (fs.existsSync(descriptionPath)) {
                    audio.description = fs.readFileSync(descriptionPath, 'utf-8');
                }

                if (fs.existsSync(imagePath)) {
                    audio.image = 'audio/' + name + '.jpg';
                }

                audios.push(audio);
            }
        });

        res.json({audios: audios})    
    });
});

router.post('/upload', (req, res) => {
    
});

router.get('/youtube', (req, res) => {
    let videos = [];
    let videoPattern = /(\.wmv|\.mp4)$/;

    fs.readdir(videoPath, (err, files) => {
        if (!files) {
            return;
        }
        files.forEach(file => {
            if (file.match(videoPattern)) {
                let video = {video: 'video/' + file};

                let n = file.indexOf('.');
                let name = file.substring(0, n);
                let titlePath = videoPath + `/${name}-title.txt`;
                let descriptionPath = videoPath + `/${name}-description.txt`;
                // let imagePath = videoPath + `/${name}.jpg`;

                if (fs.existsSync(titlePath)) {
                    video.title = fs.readFileSync(titlePath, 'utf-8');
                } 
                
                if (fs.existsSync(descriptionPath)) {
                    video.description = fs.readFileSync(descriptionPath, 'utf-8');
                }

                // if (fs.existsSync(imagePath)) {
                //     audio.image = 'audio/' + name + '.jpg';
                // }
                
                videos.push(video);
            }
        });
        res.json({videos: videos})   
    });
});

router.post('/youtube', (req, res) => {
    
});

module.exports = router;
