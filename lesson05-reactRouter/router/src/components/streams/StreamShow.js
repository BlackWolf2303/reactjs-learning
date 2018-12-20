import React from 'react';

import StreamListItem from './StreamListItem';
import StreamCreateItem from './StreamCreateItem';
import StreamEditItem from './StreamEditItem';
import StreamDeleteItem from './StreamDeleteItem';
import StreamShowItem from './StreamShowItem';

const StreamShow = () => {
  return ( 
    <div>
      <h3>StreamShow</h3>

      <br/>
      <StreamListItem />
      <StreamCreateItem />
      <StreamEditItem />
      <StreamDeleteItem />
    </div> 
  );
}

export default StreamShow;