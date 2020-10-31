import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import { Button } from 'reactstrap';

const sources = {
  bunnyMovie: 'http://localhost:4000/api/v1/materials/video/5f95453ef1393e00d4af55ed/stream'
};

export default class PlayerControlExample extends Component {
    state = {
            "currentSrc": "http://localhost:4000/api/v1/materials/video/5f95453ef1393e00d4af55ed/stream"

    };
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources.bunnyMovie
    };
  }


  render() {
    return (
      <div>
        <Player
          autoPlay
        >
          <source src={this.state.source} />
        </Player>
      </div>
    );
  }
}