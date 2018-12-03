import React, { Component } from 'react';
import Lesson from './Lesson';
import '../App.css';

class Course extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isShowOutline: true,
			totalStudent: 69
		};

		this.handleClick3 = this.handleClick3.bind(this);
		this.registerCourse = this.registerCourse.bind(this);
		this.handleToogleOutline = this.handleToogleOutline.bind(this);	
	}

	handleClick1(){
		alert("Handle Click 1");
	}
	handleClick2(content){
		alert(content);
	}
	handleClick3(){
		alert(this.props.name);
	}
	registerCourse(){
		alert('registerCourse');
		console.log(this.refs.username.value);
	}
	ShowButtonFree() {
		const isFree = this.props.free;
		console.log(isFree);
		if (isFree) {
			return (
			<div className="panel-footer">
				<div className="btn-group">
					<button onClick={this.handleClick1} type="button" className="btn btn-warning">View1</button>
					<button onClick={() => { this.handleClick2('Handle Click 2') }} type="button" className="btn btn-danger">View2</button>
					<button onClick={this.handleClick3} type="button" className="btn btn-success">View3</button>
				</div>
			</div>
			)
		}else{
			return(
				<div className="panel-footer">
					<div className="input-group">
						<span className="input-group-btn">
							<button onClick={this.registerCourse} className="btn btn-info" type="button">Register</button>
						</span>
						<input type="text" className="form-control" placeholder="Search for..." ref="username" />
					</div>
				</div>
			)
		}			 
	}
	handleToogleOutline(){
		this.setState({
			isShowOutline: !this.state.isShowOutline
		});
	}

	render() {
		const { isShowOutline } = this.state;
		const eleOutline = isShowOutline ? (
			<ul className="list-group">
				<Lesson/>
				<Lesson/>
				<Lesson/>
			</ul>
		) : null;

		return (
			<div>
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<div className="panel panel-info">
						<div className="panel-heading">
							<h3 className="panel-title">{this.props.name}</h3>	
						</div>
						<div className="panel-body">
							<p>{this.props.time}</p>
							<p><button onClick={this.handleToogleOutline} className="btn btn-success" type="button">Toogle Outline</button></p>
							{eleOutline}								
							{/* <ul className="list-group">
								<Lesson/>
								<Lesson/>
								<Lesson/>
							</ul>							 */}
						</div>
						{this.ShowButtonFree()}
						
					</div>
				</div>
			</div>
		);
	}
}

export default Course;
