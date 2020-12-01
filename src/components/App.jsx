import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    searchValue: "",
  };

  onSearchSubmit = (term) => {
    this.setState({ searchValue: term });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
