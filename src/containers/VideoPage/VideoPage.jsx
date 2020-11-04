import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import styles from './VideoPage.module.scss';
import ResponsivePlayer from '../../components/Video/Video';

const { REACT_APP_API: api } = process.env;

export class VideoPage extends Component {
    state = {
        textMaterials: [],
        nextVideoMaterialNumber: null,
        currentNumber: null
    };

    componentDidMount() {
        const { courseId } = this.props.match.params;

        fetch(`${api}/courses/${courseId}?videosPopulate=true`)
            .then((result) => result.json())
            .then((response) => {
                console.log(response);
                const updatedState = {};
                
                const video = response.data.doc.materials.videos[0];
                updatedState.videoId = video._id;

                this.setState(updatedState);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const testsUrl = `/courses/${this.props.match.params.courseId}/test/1`;
        const videoUrl = `/courses/${this.props.match.params.courseId}/read/1`;

        let nextButton = (
            <Link to={testsUrl}>
                <Button>Go to tests</Button>
            </Link>
        );

        let backButton = (
            <Link to={videoUrl}>
                <Button>Back to text materials</Button>
            </Link>
        );
        
        return (
            <div className={styles.VideoPage}>
                <div className="center-content">
                    {this.state.videoId && (
                        <ResponsivePlayer
                            url={`http://localhost:4000/api/v1/materials/video/${this.state.videoId}/stream`}
                        />
                    )}
                    <div className={styles.Footer}>
                        {backButton}
                        {nextButton}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPage;
