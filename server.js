const express = require('express');
const app = express();

app.use("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080);

const WebSocket = require('ws');

const socket = new WebSocket.Server({
    port: 8081
});

socket.on('connection', (ws, req) => {
    console.log('클라이언트가 연결되었습니다.');
    ws.on('message', (msg) => {
        console.log('유저가 보낸 메세지 : ' + msg);
        ws.send('저리 가');
    })
});