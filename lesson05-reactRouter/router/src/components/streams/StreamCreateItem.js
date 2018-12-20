import React from 'react';

import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

const StreamCreateItem = () => {
  return ( <Link to="/streams/new"> <Button color="success">Stream Create</Button></Link> );
}
export default StreamCreateItem;