import React from 'react';
import './App.css';

const Person = () => {
  return (
      <div>
        Something
      </div>
  )
};

const PersonList = () => {
  return ( <Person /> )
};

const App = () => (<PersonList />);

export default App;
