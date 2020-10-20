import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StartingPage from './containers/StartingPage/StartingPage';
import Mainpage from './containers/Mainpage/Mainpage';
import TextPage from './containers/TextPage/TextPage';
import CoursePage from './containers/CoursePage/CoursePage';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={StartingPage} />
                    <Route path="/courses" exact component={Mainpage} />
                    <Route path="/courses/:courseId" exact component={CoursePage} /> 
                    <Route path="/courses/:courseId/read/:textNumber" component={TextPage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
