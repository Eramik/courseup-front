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

        // console.log(this.props.match);
        fetch(`${api}/courses/${courseId}?videosPopulate=true`)
            .then((result) => result.json())
            .then((response) => {
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
        const backToCourseUrl = this.props.match.url
            .substring(0, this.props.match.url.indexOf('video')); 

        let nextButton = (
            <Link to="/">
                <Button>Go to tests</Button>
            </Link>
        );

        let backButton = (
            <Link to={backToCourseUrl}>
                <Button>Back to course page</Button>
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
