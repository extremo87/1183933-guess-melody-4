import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

const testTrack = `https://upload.wikimedia.org/wikipedia/ru/b/b5/Rammstein_-_Amerika.ogg`;

it(`AudioPlayer renders correctly`, () => {
  const tree = renderer.create(<AudioPlayer
    isPlaying={false}
    onPlayTrack={() => {}}
    track={testTrack}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
