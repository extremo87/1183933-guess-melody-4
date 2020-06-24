import React, {PureComponent} from 'react';
import AudioPlayer from '../components/audio-player/audio-player';

const withAudioPlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };

      this._renderPlayer = this._renderPlayer.bind(this);
    }

    _renderPlayer(src, id) {
      const {activePlayerId} = this.state;
      return (
        <AudioPlayer
          track={src}
          isPlaying={id === activePlayerId}
          onPlayTrack={() => this.setState({
            activePlayerId: activePlayerId === id ? -1 : id,
          })}
        />
      );
    }

    render() {
      return <Component
        {...this.props}
        renderPlayer={(src, id) => this._renderPlayer(src, id)}
      />;
    }
  }

  WithAudioPlayer.propTypes = {};

  return WithAudioPlayer;
};

export default withAudioPlayer;
