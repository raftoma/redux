import React from 'react';
import './css/App.css';
import Reduxtest from './components/reduxtest';
import Test from './components/test';

class App extends React.Component {
  render() {

    return (
      <div>
        <Reduxtest />
        <Test />
      </div>
    );

  }
}

export default App;
