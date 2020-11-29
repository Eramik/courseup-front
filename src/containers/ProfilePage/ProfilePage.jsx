import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './ProfilePage.scss';
import Button from '../../components/UI/Button/Button';
import DefaultUserPic from '../../img/DefaultUserLogo.png';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            email: this.props.email,
            password: this.props.password,
            userId: this.props.userId,
            token: this.props.token,
            updatedCount: 0,
        };
    }

    // updateProfileHandler = async () => {
    //     const userData = {
    //         username: this.state.username,
    //         email: this.state.email,
    //         password: this.state.password
    //     };

    //     try {
    //         const response = await fetch(`http://localhost:4000/api/v1/users/${this.userId}`, {
    //             method: 'patch',
    //             body: JSON.stringify(userData),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });

    //         // userData._id = this.state.userId;

    //         console.log(response);
    //         // this.props.authSuccess(userData);

    //         // this.setState({ updatedCount: this.state.updatedCount + 1});
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }

    render() {
        if (this.state.profileImage) {
            var imagestr = this.state.profileImage;
            imagestr = imagestr.replace('public/', '');
            var profilePic = 'http://localhost:3000/' + imagestr;
        } else {
            profilePic = DefaultUserPic;
        }

        return (
            <Container className="Contain">
                <Row>
                    <Col>
                        <img src={profilePic} alt="profils pic" className="DefaultUserPic" />
                        <h1 className="CInfo"> </h1>
                    </Col>
                    <Col>
                        <h1>User Info</h1>
                        <Form className="form">
                            <p>{this.state.msg}</p>
                            <Form.Group controlId="formCategory1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    style={{ fontSize: '2rem' }}
                                    className="Info"
                                    value={this.state.username}
                                    onChange={(e) => this.setState({ username: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formCategory2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    style={{ fontSize: '2rem' }}
                                    className="Info"
                                    value={this.state.email}
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formCategory3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    style={{ fontSize: '2rem' }}
                                    className="Info"
                                    value={this.state.password}
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        userId: state.userData._id,
        username: state.userData.username,
        email: state.userData.email,
        password: state.userData.password,
        token: state.token
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authSuccess: (token, userData) => dispatch(actions.authSuccess(token, userData))
    }
};

export default connect(mapStatetoProps, mapDispatchToProps)(ProfilePage);
