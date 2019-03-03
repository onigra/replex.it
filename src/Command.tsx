import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Popover from "react-popover";
import "./Command.css";

interface CommandProps {
  id: string;
  title: string;
  command: string;
}

interface CommandState {
  isOpen: Boolean;
  message: string;
}

class Command extends Component<CommandProps, CommandState> {
  state = {
    isOpen: false,
    message: "Click, copy to clipboard"
  };

  open() {
    this.setState({
      isOpen: true
    });
  }

  close() {
    this.setState({
      isOpen: false,
      message: "Click, copy to clipboard"
    });
  }

  copied() {
    this.setState({
      message: "Copied!!"
    });
  }

  render() {
    return (
      <div id={this.props.id}>
        <h2>{this.props.title}</h2>
        <Popover isOpen={this.state.isOpen} body={this.state.message}>
          <CopyToClipboard text={this.props.command}>
            <pre
              onMouseOver={() => this.open()}
              onMouseOut={() => this.close()}
              onClick={() => this.copied()}
            >
              <code>{this.props.command}</code>
            </pre>
          </CopyToClipboard>
        </Popover>
      </div>
    );
  }
}

export default Command;
