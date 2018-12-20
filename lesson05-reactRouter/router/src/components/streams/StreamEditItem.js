import React from 'react';

import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

const StreamEditItem = () => {
  return ( <Link to="/streams/edit"> <Button color="warning">Stream Edit</Button></Link> );
}
export default StreamEditItem;