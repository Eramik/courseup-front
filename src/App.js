import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StartingPage from './containers/StartingPage/StartingPage';
import Mainpage from './containers/Mainpage/Mainpage';
import TextPage from './containers/TextPage/TextPage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={StartingPage} />
                    <Route path="/courses" exact component={Mainpage} />
                    <Route path="/courses/:courseId/read/:materialId" component={TextPage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
