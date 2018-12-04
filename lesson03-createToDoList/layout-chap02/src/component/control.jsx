import React, { Component } from 'react';
import Search from './control/search';
import Sort from './control/sort';
import Add from './control/add';
class Control extends Component {

  render() {
    let {stringSearch, onClickSearchGo, onClickAdd, isShowForm, orderBy, orderDir,onClickSort} = this.props;

    return (
      <div className="row">
        {/* SEARCH : START */}
        <Search stringSearch={stringSearch} onClickGo={onClickSearchGo}/>
        {/* SEARCH : END */}
        {/* SORT : START */}
        <Sort orderBy={orderBy} orderDir={orderDir} onClickSort={onClickSort}/>
        {/* SORT : END */}
        {/* ADD : START */}
        <Add onClickAdd={onClickAdd} isShowForm={isShowForm}/>
        {/* ADD : END */}
      </div>
    );
  }
}

export default Control;
