import React, { Component } from "react";
import Title from "./component/title";
import Control from "./component/control";
import Form from "./component/form";
import List from "./component/list";
import _ from "lodash";

import itemsData from "./mocks/tasks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: itemsData,
      isShowForm: true,
      stringSearch: ""
    };
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleToggleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  }
  handleCloseForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  }

  handleSearch(value) {
      this.setState({
        stringSearch: value,
      });
    }

  render() {
    let itemsOrigin  = this.state.items;
    let items = [];
    let { isShowForm } = this.state;
    let { stringSearch } = this.state;
    
    items = _.filter(itemsOrigin, (item) => { return _.includes(item.name, stringSearch ); });  

      // if(stringSearch.length > 0){
      //   itemsOrigin.forEach(item => {
      //     if (item.name.toLowerCase().indexOf(stringSearch) !== -1) {
      //       items.push(item);
      //     }
      //   });
      // }else {
      //   items = itemsOrigin;
      // }



    return (
      <div className="App">
        <div className="container">
          {/* TITLE : START */}
          <Title />
          {/* TITLE : END */}
          {/* CONTROL (SEARCH + SORT + ADD) : START */}
          <Control
            onClickAdd={this.handleToggleForm}
            isShowForm={isShowForm}
            onClickSearchGo={this.handleSearch}
          />
          {/* CONTROL (SEARCH + SORT + ADD) : END */}
          {/* FORM : START */}
          {this.showForm(isShowForm)}
          {/* FORM : END */}
          {/* LIST : START */}
          <List itemsApp={items} />
          {/* LIST : END */}
        </div>
      </div>
    );
  }

  showForm(value) {
    let elmForm = null;
    if (value) {
      elmForm = <Form onClickCancel={this.handleCloseForm} />;
    }
    return elmForm;
  }
}

export default App;
