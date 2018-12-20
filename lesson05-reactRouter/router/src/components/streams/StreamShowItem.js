import React from 'react';

import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

const StreamShowItem = () => {
  return ( <Link to="/streams/show"> <Button color="dark">Stream Show</Button></Link> );
}
export default StreamShowItem;