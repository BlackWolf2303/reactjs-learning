import React, { Component } from "react";
class Sort extends Component {

  handleSort(orderBy,orderDir){
    this.props.onClickSort(orderBy,orderDir);
  }

  render() {
    let {orderBy, orderDir} = this.props; 
    let stringSort = orderBy + "-" + orderDir;

    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort by <span className="caret" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a href="#" role="button" onClick={()=>this.handleSort('name','asc')}>Name ASC</a>
              
            </li>
            <li>
              <a href="#" role="button" onClick={()=>this.handleSort('name','desc')}>Name DESC</a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a href="#" role="button" onClick={()=>this.handleSort('level','asc')}>Level ASC</a>
            </li>
            <li>
              <a href="#" role="button" onClick={()=>this.handleSort('level','desc')}>Level DESC</a>
            </li>
          </ul>
          <span className="label label-success label-medium">{stringSort}</span>
        </div>
      </div>
    );
  }
}

export default Sort;
