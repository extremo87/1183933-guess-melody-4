import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class AudioPlayer extends PureComponent {

  constructor(props) {
    super(props);

    this.track = React.createRef();

    this.state = {
      isLoading: true,
      progress: 0,
      isPlaying: props.isPlaying,
    };

    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    const {track} = this.props;
    const audio = this.track.current;

    audio.src = track;

    audio.oncanplaythrough = () => {
      this.setState({
        isLoading: false,
      });
    };

    audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    audio.onpause = () => {
      this.setState({
        isPlaying: false,
      });
    };

    audio.ontimeupdate = () => {
      this.setState({
        progress: audio.currentTime
      });
    };
  }

  handlePlay() {
    this.setState({isPlaying: !this.state.isPlaying});
    this.props.onPlayTrack();
  }


  componentWillUnmount() {
    const audio = this.track.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }

  componentDidUpdate() {
    const audio = this.track.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  render() {
    const {isPlaying, isLoading} = this.state;
    return (
      <Fragment>
        <button className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => this.handlePlay()}
        />
        <div className="track__status">
          <audio ref={this.track} />
        </div>
      </Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  track: PropTypes.string.isRequired,
  onPlayTrack: PropTypes.func.isRequired
};

