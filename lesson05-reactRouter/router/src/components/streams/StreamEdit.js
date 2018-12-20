import React from 'react';

import StreamListItem from './StreamListItem';
import StreamCreateItem from './StreamCreateItem';
import StreamEditItem from './StreamEditItem';
import StreamDeleteItem from './StreamDeleteItem';
import StreamShowItem from './StreamShowItem';

const StreamEdit = () => {
  return ( 
    <div>
      <h3>StreamEdit</h3>

      <br/>
      <StreamListItem />
      <StreamCreateItem />
      <StreamDeleteItem />
      <StreamShowItem />
  </div>
  );
}

export default StreamEdit;