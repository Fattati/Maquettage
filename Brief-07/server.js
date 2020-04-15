const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
// 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get('/inscription', (req, res) => {
    res.sendFile(path.join(__dirname + "/Inscription.html"));
});
app.get('/page2', (req, res) => {
    res.sendFile(__dirname + "/fichier.html");
});
app.get('/update', (req, res) => {
    res.sendFile(__dirname + "/updateform.html");
});
// 
app.post('/save', (req, res) => {
    console.log(req.body.data);
    var filedata = fs.readFileSync('data.json');
    filedata = JSON.parse(filedata);
    // 
    var clientdata = req.body.data;
    clientdata.data0 = filedata.length;
    // 
    filedata.push(clientdata);
    // 
    filedata = JSON.stringify(filedata);
    // 
    fs.writeFileSync('data.json', filedata);
    // 
    res.end(JSON.stringify({
        url: '/page2',
        email: req.body.data.data2
    }));
    // res.sendFile(__dirname + "/index.html");
    // res.redirect(__dirname + '/index.html');
});
// 


// 
app.post('/delete', (req, res) => {
    var jsondata = JSON.parse(fs.readFileSync('data.json'));
    var tosaveData = [];
    // 
    for (let i = 0; i < jsondata.length; i++) {
        if (jsondata[i].data2 != req.body.email)
            tosaveData.push(jsondata[i]);
    }
    // 
    fs.writeFileSync('data.json', JSON.stringify(tosaveData));
    res.end('cc');
});
// 
app.post('/getDataByEmail', (req, res) => {
    var jsondata = JSON.parse(fs.readFileSync('data.json'));
    var valRet = {};
    // 
    jsondata.forEach(element => {
        if (element.data2 == req.body.email)
            valRet = element;
    });
    // 
    res.end(JSON.stringify(valRet));
});
// 
app.post('/updateData', (req, res) => {
    var jsondata = JSON.parse(fs.readFileSync('data.json'));
    // 
    for (let i = 0; i < jsondata.length; i++) {
        if (jsondata[i].data2 == req.body.email) {
            jsondata[i].data1 = req.body.data1;
            jsondata[i].data3 = req.body.data3;
        }
    }
    // 
    fs.writeFileSync('data.json', JSON.stringify(jsondata));
    res.end('cc');
});
// Acces to folder
app.use('/', express.static(path.join(__dirname)));

// 
app.listen(8080, () => {
    console.log('started...')
});