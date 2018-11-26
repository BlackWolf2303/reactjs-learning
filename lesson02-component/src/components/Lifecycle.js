import React, { Component } from 'react';
// import Lesson from './Lesson';
import '../App.css';

class Course extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "Lifecycle",
		};
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		console.log("constructor");
	}
	componentWillMount(){
		console.log("componentWillMount");
	}
	componentDidMount(){
		console.log("componentdidMount");
	}
	handleChangeTitle(){
		this.setState({
			title: "LifecycleComponent - handleChangeTitle"
		})
		console.log("handleChangeTitle");
	}

	render() {
		console.log("render");
		console.log(this.state);
		return (
			<div>
				<div className="panel panel-danger">
					<div className="panel-heading">
						<h3 className="panel-title">{this.state.title}</h3>
					</div>
					<div className="panel-body">
						<button onClick={this.handleChangeTitle} type="button" className="btn btn-success">Change</button>
					</div>
				</div>	
			</div>
		);
	}
}

export default Course;


