import React, { Component } from 'react';
import Mainpage from './containers/Mainpage/Mainpage';
import Header from './components/Header/Header';
import StartingPage from './containers/StartingPage/StartingPage';

class App extends Component {

    render() {
        return (
          <div>
            <Header />
            <StartingPage />
          </div>   
        );
    }
}

export default App;
