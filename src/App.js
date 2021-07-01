import React, { Component } from "react";
import "./App.css";

import imageprofil from "./profil-pic.jpg";

class App extends Component {
  state = {
    fullname: "Nafti Abboud",
    profession: "FullStack Developer",
    bio: `hello this is my Bio`,
    pic: imageprofil,
    show: false,
    timer: 0,
  };
  onClickhandler() {
    this.setState({
      show: !this.state.show,
    });
  }
  componentDidMount() {
    this.setState({ timer: 0 });
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            It's been {this.state.timer} seconds since the component got mounted
          </p>
          <button className="btn" onClick={() => this.onClickhandler()}>
            show
          </button>
          {this.state.show === true ? (
            <div>
              <img src={this.state.pic} alt="profil pic" />
              <h1>{this.state.name}</h1>
              <h2>{this.state.profession}</h2>
              <p>{this.state.bio}</p>
            </div>
          ) : (
            <div></div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
