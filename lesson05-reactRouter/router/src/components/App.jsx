import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { Button } from 'reactstrap';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

// const PageOne = () => {
//   return <div>PageOne <br/>
//     <Link to="/pagetwo">page 2</Link>
//   </div>
// };
// const PageTwo = () => {
//   return (
//   <div>
//   PageTwo 
//   <Button color="info">Click me!</Button>
//   <br/>
//   <Link to="/">page 1</Link>
//   <Link to="/pagethree">page 3</Link>
//   </div>
//   );
// };

// const PageThree = () => {
//   return <div>PageThree <br/>
//       <Link to="/pagetwo">page 2</Link>
//   </div>
// };

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Route path="/" exact component={StreamList}/>
        <Route path="/streams/new" component={StreamCreate}/>
        <Route path="/streams/edit" component={StreamEdit}/>
        <Route path="/streams/delete" component={StreamDelete}/>
        <Route path="/streams/show" component={StreamShow}/>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;