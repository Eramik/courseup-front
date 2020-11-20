import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StartingPage from './containers/StartingPage/StartingPage';
import Mainpage from './containers/Mainpage/Mainpage';
import TextPage from './containers/TextPage/TextPage';
import VideoPage from './containers/VideoPage/VideoPage';
import CoursePage from './containers/CoursePage/CoursePage';
import TestPage from './containers/TestPage/TestPage';
import SignUpPage from './containers/SignUpPage/SignUpPage';
import ProfilePage from './containers/ProfilePage/ProfilePage';
import ReviewPage from './containers/ReviewPage/ReviewPage';
import { connect } from 'react-redux';
import cookies from 'js-cookie';
import * as actions from './store/actions';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authed: this.props.authToken !== null
        }
    }

    tryAutoLogin = () => {
        if (!this.authed) {
            const token = cookies.get('token');
            const user = cookies.get('user');

            if (!token || !user) {
                this.setState({ authed: false });
            } else {
                this.props.authSuccess(token, JSON.parse(user));
                this.setState({ authed: true });
            }
        }
    }

    componentDidMount() {
        this.tryAutoLogin();
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={StartingPage} />
                <Route path="/courses" exact component={Mainpage} />
                <Route path="/courses/:courseId" exact component={CoursePage} />
                <Route path="/signUp" exact component={SignUpPage} />
            </Switch>
        );

        if (this.state.authed) {
            routes = (
                <Switch>
                    <Route path="/" exact component={StartingPage} />
                    <Route path="/courses" exact component={Mainpage} />
                    <Route path="/signUp" exact component={SignUpPage} />
                    <Route path="/profile" exact component={ProfilePage} />
                    <Route path="/courses/:courseId" exact component={CoursePage} />
                    <Route path="/courses/:courseId/read/:textNumber" component={TextPage} />
                    <Route path="/courses/:courseId/video/:videoNumber" component={VideoPage} />
                    <Route path="/courses/:courseId/test/:testNumber" component={TestPage} />
                    <Route path="/courses/:courseId/review" component={ReviewPage} />
                </Switch>
            );
        }

        return (
            <div>
                <Header />
                {routes}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authToken: state.token
});

const mapDispatchToProps = dispatch => ({
    authSuccess: (token, userData) => dispatch(actions.authSuccess(token, userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
