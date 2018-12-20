import React from 'react';

import StreamListItem from './StreamListItem';
import StreamCreateItem from './StreamCreateItem';
import StreamEditItem from './StreamEditItem';
import StreamDeleteItem from './StreamDeleteItem';
import StreamShowItem from './StreamShowItem';

const StreamDelete = () => {
  return ( 
  <div>
  <h3>StreamDelete</h3>
  
  <br/>
  <StreamListItem />
      <StreamCreateItem />
      <StreamEditItem />
      <StreamShowItem />
  </div>
  );
}

export default StreamDelete;