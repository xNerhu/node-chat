import React from 'react';

interface Props {
  placeholder?: string;
}

interface State {
  activated: boolean;
}

export default class Input extends React.Component<Props, State> {
  public state: State = {
    activated: false,
  };

  public input: HTMLInputElement;

  private onFocus = () => {
    this.setState({ activated: true });
  };

  private onBlur = () => {
    if (this.input.value.length > 0) return;
    this.setState({ activated: false });
  };

  render() {
    const { placeholder } = this.props;
    const { activated } = this.state;

    const indicatorStyle = {
      width: activated ? '100%' : '0%',
    };

    return (
      <div className="material-input">
        <input
          ref={r => (this.input = r)}
          placeholder={placeholder}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          spellCheck={false}
        />
        <div className="indicator" style={indicatorStyle} />
      </div>
    );
  }
}
