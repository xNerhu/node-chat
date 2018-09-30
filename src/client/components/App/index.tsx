import React from 'react';

export default class App extends React.Component {
  private input: HTMLInputElement;

  private onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.send(this.input.value);
    }
  };

  private onSendButtonClick = () => {
    this.send(this.input.value);
  };

  public send = (message: string) => {
    console.log(message);
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