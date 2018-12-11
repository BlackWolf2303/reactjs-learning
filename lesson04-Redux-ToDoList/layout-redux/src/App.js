import React, { Component } from "react";
import { connect } from 'react-redux';

import Title from "./component/title";
import Control from "./component/control";
import Form from "./component/form";
import List from "./component/list";
import {reject, remove, filter, includes, sortBy as funcOrderBy} from "lodash";
import itemsData from "./mocks/itemsData";
import * as types from './constants/actionTypes';

const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items       : itemsData,
      // isShowForm  : false,
      stringSearch: "",
      orderBy     : "name",
      orderDir    :"asc",
      itemEdit    : null
    };

    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleToggleForm() {
    // this.setState({ 
    //   isShowForm: !this.state.isShowForm,
    //   itemEdit: ''
    // });
    var {dispatch} = this.props;
    dispatch();  
  }
  handleCloseForm() {
    var {dispatch} = this.props;
    dispatch({type:types.CLOSE_FORM});
  }

  handleSearch(value) {
      this.setState({
        stringSearch: value,
      });
    }

  handleSort(orderBy,orderDir){
    this.setState({
      orderBy : orderBy,
      orderDir: orderDir
    });
  }

  handleDelete(id){
    let {items} = this.state;
    remove(items, (item)=> {return item.id === id});
    this.setState({
      items: items
    });
  }

handleSubmit(item){
  let {items} = this.state;
  let id = null;
  if(item.id !== ''){
    items = reject(items, { id: item.id });
    id = item.id;
    // items.forEach((elm,key) => {
    //   if(elm.id ===item.id){
    //     items[key].name = item.name;
    //     items[key].level = +item.level;
    //   }
    // })
  }else{
      id  = uuidv4();
  }
  items.push({    
    id  : id,
    name: item.name,
    level: +item.level //0 small, 1 medium, 2 high
});

  this.setState({
    items:items,
    isShowForm: false
  });
  console.log(item);
}

handleEdit(item){

  this.setState ({
    itemEdit: item,
    isShowForm: true
  });
}



  render() {  
    let itemsOrigin     = this.state.items;
    let items           = [];
    let {isShowForm, stringSearch, orderBy, orderDir}    = this.props;

    
    items = filter(itemsOrigin, (item) => { return includes(item.name.toLowerCase(), stringSearch ); });
    items = funcOrderBy(items,[orderBy],[orderDir]);

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
            // isShowForm={isShowForm}
            onClickSearchGo={this.handleSearch}
            orderBy={orderBy}
            orderDir={orderDir}
            onClickSort={this.handleSort}

          />
          {/* CONTROL (SEARCH + SORT + ADD) : END */}
          {/* FORM : START */}
          {this.showForm(isShowForm)}
          {/* FORM : END */}
          {/* LIST : START */}
          <List onClickDelete={this.handleDelete} onClickEdit={this.handleEdit}/>
          {/* LIST : END */}
        </div>
      </div>
    );
  }

  showForm(value) {
    let elmForm = null;
    if (value) {
      elmForm = <Form itemEdit={this.state.itemEdit} onClickSubmit={this.handleSubmit} onClickCancel={this.handleCloseForm} />;
    }
    return elmForm;
  }
}

const mapStateToProps = state =>{
  
  return {
    isShowForm: state.isShowForm,
  }
}
export default connect(mapStateToProps,null)(App);
