import React, { Component } from "react";
import { connect } from 'react-redux';


class Add extends Component {

  render() {
    let {isShowForm} = this.props;     
    let showButton = null;
    if(isShowForm){
      showButton = <button type="button" className="btn btn-success btn-block" onClick={this.props.onClickAdd}>Close Task</button>; 
    }else{
      showButton = <button type="button" className="btn btn-info btn-block" onClick={this.props.onClickAdd}>Add Task</button>;
    } 
    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        {showButton}
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    isShowForm: state.isShowForm,
  }
}
export default connect(mapStateToProps,null)(Add);
