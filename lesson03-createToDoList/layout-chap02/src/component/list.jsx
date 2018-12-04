import React, { Component } from 'react';
import Item from './list/item';
class List extends Component {
  constructor(props){
    super(props);
    this.state = { };

  }
 
  render() { 
    const items = this.props.itemsApp;
    let {onClickDelete} = this.props;
    const elmItem = items.map((item,index) => {

      return (
          <Item key={index} item={item} index={index} onClickDelete={onClickDelete}/>
      );
    });

    return ( 
      <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
              <thead>
                <tr>
                  <th style={{ width: "10%" }} className="text-center">
                    #
                  </th>
                  <th>Task</th>
                  <th style={{ width: "20%" }} className="text-center">
                    Level
                  </th>
                  <th style={{ width: "20%" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {elmItem}
              </tbody>
            </table>
          </div>
    );
  }

}
export default List;