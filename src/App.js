import React from 'react';
import CommentsListContainer from './CommentsListContainer';
import DevTools from './DevTools';
import './App.css';
import MessageInputContainer from './MessageInputContainer';

const App = () => {
  return (
    <div className="App">
      <MessageInputContainer />
      <CommentsListContainer />
      <DevTools />
    </div>
  )
};

export default App;