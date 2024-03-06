const multer = require('multer');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3081;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.fields([
    { name: 'vid', maxCount: 1 },
    { name: 'subs', maxCount: 1 }
]), (req, res) => {
    const vidFile = req.files['vid'][0];
    const subsFile = req.files['subs'][0];
    const seed = req.body.seed;

    if (!vidFile || !subsFile) {
        return res.status(400).send('Missing either the video file or the subtitle file.');
    }

    const folderPath = path.join(__dirname, 'uploads', seed);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    const vidFilePath = path.join(folderPath, vidFile.originalname);
    const subsFilePath = path.join(folderPath, subsFile.originalname);

    fs.renameSync(vidFile.path, vidFilePath);
    fs.renameSync(subsFile.path, subsFilePath);

    res.send('Files uploaded successfully!');
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});