import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StartingPage from './containers/StartingPage/StartingPage';
import Mainpage from './containers/Mainpage/Mainpage';
import CoursePage from './containers/CoursePage/CoursePage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={StartingPage} />
                    <Route path="/courses" exact component={Mainpage} />
                    <Route path="/courses/:courseId" component={CoursePage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
