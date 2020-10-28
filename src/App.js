import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StartingPage from './containers/StartingPage/StartingPage';
import Mainpage from './containers/Mainpage/Mainpage';
import TextPage from './containers/TextPage/TextPage';
import VideoPage from './containers/VideoPage/VideoPage';
import CoursePage from './containers/CoursePage/CoursePage';
import TestPage from './containers/TestPage/TestPage';

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
                    <Route path="/courses/:courseId/video/:videoNumber" component={VideoPage} />
                    <Route path="/courses/:courseId/test/:testNumber" component={TestPage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
