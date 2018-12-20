import React from 'react';

import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

const StreamListItem = () => {
  return ( <Link to="/"> <Button color="primary">Stream List</Button></Link> );
}
export default StreamListItem;