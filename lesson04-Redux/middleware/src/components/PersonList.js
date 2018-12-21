import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: []
    }
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res);
        this.setState({users: res.data});       
      });
  }

  render() { 
    return ( 
      <ul>
        {this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    );
  }
}

export default PersonList;