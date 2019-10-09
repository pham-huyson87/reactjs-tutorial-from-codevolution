import React from 'react';
import './App.css';


import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import FormHandling from './components/FormHandling';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Fragment from './components/Fragment';


function App() {
  return (
    <div className="App">
      <FunctionComponent />
      <ClassComponent />
      <FormHandling />
      <Fragment />
      
      <Stylesheet primary />
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>

    
    </div>
  );
}

export default App;
