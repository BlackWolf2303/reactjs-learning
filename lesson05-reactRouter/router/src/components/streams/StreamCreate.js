import React from 'react';

import StreamListItem from './StreamListItem';
import StreamCreateItem from './StreamCreateItem';
import StreamEditItem from './StreamEditItem';
import StreamDeleteItem from './StreamDeleteItem';
import StreamShowItem from './StreamShowItem';


const StreamCreate = () => {
  return ( 
    <div>    
      <h3>StreamCreate</h3>

      <br/>
      <StreamListItem />
      <StreamEditItem />
      <StreamDeleteItem />
      <StreamShowItem />
    </div> 
  );
}

export default StreamCreate;