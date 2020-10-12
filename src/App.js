import React, { Component } from 'react';
import Mainpage from './containers/Mainpage/Mainpage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
                <Footer />
            </div>
        );
    }
}

export default App;
