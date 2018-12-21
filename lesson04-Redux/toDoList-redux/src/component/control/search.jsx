import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringSearch: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch() {
    console.log(this.state.stringSearch);
    this.props.onClickGo(this.state.stringSearch);
  }
  handleClear() {
    this.setState({stringSearch : ""});
    this.props.onClickGo(this.state.stringSearch);
  }
  handleChange(event) {
    this.setState({
      stringSearch: event.target.value
    });
  }

  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input
            value={this.state.stringSearch}
            onChange={this.handleChange}
            type="text"
            className="form-control"
            laceholder="Search for..."
          />
          <span className="input-group-btn">
            <button
              className="btn btn-info"
              type="button"
              onClick={this.handleSearch}
            >
              Go!
            </button>
            <button
              className="btn btn-success"
              type="button"
              onClick={this.handleClear}
            >
              Clear
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
