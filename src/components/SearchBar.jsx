import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.search);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
