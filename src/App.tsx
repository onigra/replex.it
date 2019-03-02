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
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form action="">
            <input type="text" placeholder="search" />
          </form>
          {this.state.initItems.map((item, index) => {
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
