import React, { Component } from 'react';
import Search from './control/search';
import Sort from './control/sort';
import Add from './control/add';
class Control extends Component {

  render() {
    return (
      <div className="row">
        {/* SEARCH : START */}
        <Search stringSearch={this.props.stringSearch} onClickGo={this.props.onClickSearchGo}/>
        {/* SEARCH : END */}
        {/* SORT : START */}
        <Sort />
        {/* SORT : END */}
        {/* ADD : START */}
        <Add onClickAdd={this.props.onClickAdd} isShowForm={this.props.isShowForm}/>
        {/* ADD : END */}
      </div>
    );
  }
}

export default Control;
