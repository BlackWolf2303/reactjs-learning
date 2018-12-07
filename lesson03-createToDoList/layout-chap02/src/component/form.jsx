import React, { Component } from "react";
class Form extends Component {
constructor(props){
  super(props);
  this.state = {
    id:"",
    name:"",
    level:""
  };


  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

componentWillMount(){
  let item = this.props.itemEdit;
  if(item.id !== "") {
    this.setState({
      id:item.id,
      name:item.name,
      level:item.level
    });
  }
}

componentWillReceiveProps(nextProps){
  let item = nextProps.itemEdit;
  if(item.id !== "") {
    this.setState({
      id:item.id,
      name:item.name,
      level:item.level
    });
  }
}

handleChange(event) {

  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]:value
  });
}

handleSubmit(event) {
  let item = {
    id: this.state.id,
    name: this.state.name,
    level: this.state.level,
  };
  this.props.onClickSubmit(item);
  event.preventDefault();
}

  render() {

    return (
      <div className="row">
        <div className="col-md-offset-7 col-md-5">
          <form onSubmit={this.handleSubmit} action ="#" className="form-inline">
            <div className="form-group">
              <label className="sr-only" htmlFor ="label">
                label
              </label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                className="form-control"
                placeholder="Task Name"
              />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="label">
                label
              </label>
              <select
                value={this.state.level}
                onChange={this.handleChange}
                name="level"
                id="inputDs"
                className="form-control"
                required="required"
              >
                <option value={0}>Small</option>
                <option value={1}>Medium</option>
                <option value={2}>High</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn btn-default" onClick={this.props.onClickCancel}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
