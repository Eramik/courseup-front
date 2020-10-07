import React, { Component } from 'react';
import Mainpage from './containers/Mainpage/Mainpage';
import Header from './components/Header/Header';

class App extends Component {

    render() {
        return (
          <div>
            <Header />
            <Mainpage />
          </div>
        );
    }
}

export default App;
