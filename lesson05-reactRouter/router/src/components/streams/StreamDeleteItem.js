import React from 'react';

import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

const StreamDeleteItem = () => {
  return ( <Link to="/streams/delete"> <Button color="danger">Stream Delete</Button></Link> );
}
export default StreamDeleteItem;