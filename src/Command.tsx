import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "./Command.css";

interface CommandProps {
  id: string;
  title: string;
  command: string;
}

class Command extends Component<CommandProps> {
  render() {
    return (
      <div id={this.props.id}>
        <h2>{this.props.title}</h2>
        <pre>
          <CopyToClipboard text={this.props.command}>
            <code>{this.props.command}</code>
          </CopyToClipboard>
        </pre>
      </div>
    );
  }
}

export default Command;
