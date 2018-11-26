import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Course from './components/Course';
import Lifecycle from './components/Lifecycle';

class App extends Component {
	render() {
		const items = [
			{
				name: 'ReactJS',
				time: '30h',
				free: true,
				desc: 'ReactJS is very simple'
			},
			{
				name: 'Angular 4x',
				time: '45h',
				free: true,
				desc: 'Angular 4x is very nice'
			},
			{
				name: 'NodeJS',
				time: '60h',
				free: false,
				desc: 'NodeJS is very good'
			},

		];
		let elmCourses = items.map((item,index) =>
			<Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>
		);
			elmCourses = null;
		return (
			<div className="App-content">
				<h1>App Component</h1>
					<div className="row">
					{elmCourses}
					{/* <Lifecycle />
						<Course name = "ReactJS" time="30h" free={true}/>
						<Course name = "Angular 4x" time="45h" free={false}/>
						<Course name = "NodeJS" time="60h" free={true}/>			 */}
					</div>
			</div>
		);
	}
}

export default App;
