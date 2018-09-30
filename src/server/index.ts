import express from 'express';
import http from 'http';
import socket_io from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socket_io(server);

app.use(express.static('build'));

io.on('connection', socket => {
  socket.on('send-message', data => {
    console.log(`Message: ${data}`);

    socket.emit('receive-message', data);
  });
});

server.listen(8080, () => {
  console.log('Listening on port 8080!');
});
