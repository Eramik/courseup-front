import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import styles from './TextPage.module.scss';

const { REACT_APP_API: api } = process.env;

export class TextPage extends Component {
    state = {
        textMaterials: []
    };

    componentDidMount() {
        const { courseId, textNumber } = this.props.match.params;

        // console.log(this.props.match);
        fetch(`${api}/courses/${courseId}?readPopulate=true`)
            .then((result) => result.json())
            .then((response) => {
                const fetchedText = response.data.course.materials.texts[textNumber];
                this.setState({ textMaterials: fetchedText.text.split('\\n') });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidUpdate() {
        console.log(this.props.match.url);
    }

    render() {
        const formattedText = this.state.textMaterials.map((part, i) => <p key={i}>{part}</p>);

        return (
            <div className={styles.TextPage}>
                <div className="center-content">
                    <h2>Lesson 1</h2>
                    {formattedText}
                </div>
                <div className="center-content">
                    <div className={styles.Footer}>
                        <Link
                            to={this.props.match.url.substring(0, this.props.match.url.indexOf('read'))}
                        >
                            <Button>Previous</Button>
                        </Link>
                        <Button>Next</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TextPage;
