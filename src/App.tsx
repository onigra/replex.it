import React, { Component } from "react";
import "./App.css";
import Repls from "./repls";
import Command from "./Command";

interface ReplsState {
  initItems: Array<any>;
  items: Array<any>;
}

class App extends Component<any, ReplsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      initItems: Repls,
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ items: this.state.initItems });
  }

  handleChange(e: any) {
    const updateList = this.state.initItems.filter(item => {
      return item.keyword.search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updateList });
  }

  render() {
    return (
      <div className="App">
        <h1>replex.it</h1>
        <form action="">
          <input
            type="text"
            placeholder="search"
            onChange={this.handleChange}
          />
        </form>
        <header className="App-header">
          {this.state.items.map((item, index) => {
            return (
              <div key={index}>
                <Command
                  id={item.id}
                  title={item.title}
                  command={item.command}
                />
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
