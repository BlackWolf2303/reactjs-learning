import React, { Component } from "react";
import Title from "./component/title";
import Control from "./component/control";
import Form from "./component/form";
import List from "./component/list";

import itemsData from "./mocks/tasks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items : itemsData,
      isShowForm: true,
    };
  }

  render() {
    console.log(this.state.taskItems);
    let {isShowForm} = this.state;

    return (
      <div className="App">
        <div className="container">
          {/* TITLE : START */}
          <Title />
          {/* TITLE : END */}
          {/* CONTROL (SEARCH + SORT + ADD) : START */}
          <Control />
          {/* CONTROL (SEARCH + SORT + ADD) : END */}
          {/* FORM : START */}
          {this.showForm(isShowForm)}
          {/* FORM : END */}
          {/* LIST : START */}
          <List itemsApp = {this.state.items} />
          {/* LIST : END */} 
        </div>                   
      </div>
    );
  }

  showForm(value){
    let elmForm = null;
    if(value){
      elmForm = <Form />;
    }
    return elmForm;
  }
}

export default App;