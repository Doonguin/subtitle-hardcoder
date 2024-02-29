const multer = require('multer');
const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3081;

const dir = "uploads";
let storage;

const createSeedDir = () => {
    const seed = Math.random().toString().slice(2, 9);

    const destinationPath = `uploads/${seed}`;
    fs.mkdirSync(destinationPath, { recursive: true });
    fs.mkdirSync(`${destinationPath}/frames`, { recursive: true });

    return storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, destinationPath);
        },
        filename : (req, file, cb) => {
            cb(null, file.originalname);
        }
    });
}

const upload = multer({ storage: createSeedDir() });

app.post('/upload', upload.fields([
    { name: 'vid', maxCount: 1 },
    { name: 'subs', maxCount: 1 }
]), (req, res) => {
    const vidFile = req.files['vid'][0];
    const subsFile = req.files['subs'][0];

    if (!vidFile || !subsFile) {
        return res.status(400).send('Missing either the video file or the subtitle file.');
    }

    res.send('Files uploaded successfully!');
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});