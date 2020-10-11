import React, { Component } from 'react';
import Mainpage from './containers/Mainpage/Mainpage';
import Header from './components/Header/Header';
import StartingPage from './containers/StartingPage/StartingPage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={StartingPage} />
                    <Route path="/courses" component={Mainpage} />
                </Switch>
            </div>
        );
    }
}

export default App;
