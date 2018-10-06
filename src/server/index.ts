import express from 'express';
import http from 'http';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(helmet());
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
