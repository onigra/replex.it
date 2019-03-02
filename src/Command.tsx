import React, { Component } from "react";

interface ReplsProps {
  id: string;
  title: string;
  command: string;
}

class Command extends Component<ReplsProps> {
  render() {
    return (
      <div id={this.props.id}>
        <h2>{this.props.title}</h2>
        <p>{this.props.command}</p>
      </div>
    );
  }
}

export default Command;
