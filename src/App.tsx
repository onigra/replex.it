import React, { Component } from "react";
import "./App.css";
import Repls, { ReplInfo } from "./repls";
import Command from "./Command";

interface ReplsState {
  initItems: Array<ReplInfo>;
  items: Array<ReplInfo>;
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
      return item.keyword.indexOf(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updateList });
  }

  render() {
    return (
      <div className="App">
        <h1>replex.it</h1>
        <div className="source">
          <a
            href="https://github.com/onigra/replex.it"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            github.com/onigra/replex.it
          </a>
        </div>
        <form>
          <input
            type="text"
            placeholder="Search: python, js, irb..."
            onChange={this.handleChange}
            className="search"
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
