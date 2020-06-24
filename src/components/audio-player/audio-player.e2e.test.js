import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

configure({adapter: new Adapter()});

const testTrack = `https://upload.wikimedia.org/wikipedia/ru/b/b5/Rammstein_-_Amerika.ogg`;


it(`Play button pressed twice correctly`, () => {
  const testFn = jest.fn();
  const screen = mount(<AudioPlayer
    isPlaying={false}
    onPlayTrack={testFn}
    track={testTrack}
  />);
  const playButton = screen.find(`.track__button`);
  window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };

  screen.instance().setState({isLoading: false});
  playButton.simulate(`click`);

  expect(testFn).toHaveBeenCalledTimes(1);
  // That means that player is on
  expect(screen.instance().state.isPlaying).toEqual(true);
  expect(screen.find(`.track__button`).hasClass(`track__button--pause`)).toEqual(true);

  playButton.simulate(`click`);
  // That means that player is off
  expect(screen.instance().state.isPlaying).toEqual(false);
  expect(screen.find(`.track__button`).hasClass(`track__button--play`)).toEqual(true);

});


