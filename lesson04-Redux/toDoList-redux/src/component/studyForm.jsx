import React, { Component } from "react";

class StudyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      option:"",
      checkBox: "option1",
      sendMail: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]:value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">Example Form</div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                />
              </div>
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                <div className="col-sm-10">
                  <div className="form-check ">
                    <input
                      checked={this.state.radioBox === 'option1'}
                      onChange={this.handleChange}
                      className="form-check-input"
                      type="radio"
                      name="radioBox"
                      id="checkBox1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="checkBox1">
                      First radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                    checked={this.state.radioBox === 'option2'}
                    onChange={this.handleChange}
                      className="form-check-input"
                      type="radio"
                      name="radioBox"
                      id="checkBox2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="checkBox2">
                      Second radio
                    </label>
                  </div>
                  <div className="form-check ">
                    <input
                    checked={this.state.radioBox === 'option3'}
                    onChange={this.handleChange}
                      className="form-check-input"
                      type="radio"
                      name="radioBox"
                      id="checkBox3"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="checkBox3">
                      Third disabled radio
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <div className="col-sm-2">Checkbox</div>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    checked={this.state.sendMail}
                    onChange={this.handleChange}
                    name="sendMail"
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Example checkbox
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4" >
                <select className="form-control" value={this.state.option} onChange={this.handleChange} name="option">
                  <option value="Options-1">Options-1</option>
                  <option value="Options-2">Options-2</option>
                  <option value="Options-3">Options-3</option>
                  <option value="Options-4">Options-4</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StudyForm;
