import React from 'react';
import './App.css';


import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import FormHandling from './components/FormHandling';


function App() {
  return (
    <div className="App">
      <FunctionComponent />
      <ClassComponent />
      <FormHandling />
      <Fragment />
    </div>
  );
}

export default App;
