import React, { Component } from 'react';

//create new context
const MyContext = React.createContext();

//create context provider
class MyProvider extends Component {
  state = { 
    name: "abc",
    age: 16,
    phone: 343546
  }
  render() { 
  return ( 
    <MyContext.Provider value={this.state.name}>
    {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;


