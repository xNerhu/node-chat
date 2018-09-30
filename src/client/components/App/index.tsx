import React from 'react';
import io from 'socket.io-client';

let socket: SocketIOClient.Socket;

class App extends React.Component {
  private input: HTMLInputElement;

  public componentDidMount() {
    socket = io.connect('http://localhost:8080');

    socket.on('receive-message', (data: any) => {
      console.log(data);
    });
  }

  private onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.send(this.input.value);
    }
  };

  private onSendButtonClick = () => {
    this.send(this.input.value);
  };

  public send = (message: string) => {
    socket.emit('send-message', message);
  };

  render() {
    return (
      <div className="app-container">
        <div className="form">
          <input
            ref={r => (this.input = r)}
            className="message-input"
            type="text"
            placeholder="Message"
            onKeyPress={this.onKeyPress}
          />
          <div className="message-send" onClick={this.onSendButtonClick}>
            SEND
          </div>
        </div>
      </div>
    );
  }
}

export default App;
