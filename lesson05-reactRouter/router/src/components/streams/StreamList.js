import React from 'react';

import StreamListItem from './StreamListItem';
import StreamCreateItem from './StreamCreateItem';
import StreamEditItem from './StreamEditItem';
import StreamDeleteItem from './StreamDeleteItem';
import StreamShowItem from './StreamShowItem';

const StreamList = () => {
  return ( 
    <div>
      <h3>StreamList</h3>

      <br/>
      <StreamCreateItem />
      <StreamEditItem />
      <StreamDeleteItem />
      <StreamShowItem />
    </div> 
  );
}

export default StreamList;