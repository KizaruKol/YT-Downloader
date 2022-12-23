const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.listen(4001, () => {
    console.log('Server Works !!! At port 4001');
});
app.get('/download', (req,res) => {
    var URL = req.query.URL;
    console.log('new req', URL)

    res.set('content-type', 'octet/stream')
    res.set('Content-Disposition', 'attachment; filename="download.mp3"')
    
    ytdl(URL, {
        format: 'mp3'
        }).pipe(res);
});