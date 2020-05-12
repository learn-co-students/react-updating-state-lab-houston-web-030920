// Code YouTubeDebugger Component Here
import React from 'react';

class YoutubeDebugger extends React.Component {
  state={
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }


bitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  resolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      },
    });
  }

  render(){
      return (
      <div>
      <button className= 'bitrate' onClick={ this.bitrateClick}>bitrate button</button>
      <button className='resolution' onClick={this.resolutionClick}>resolution button</button>
      </div>
     
    
      )
      
  }
}

export default YoutubeDebugger