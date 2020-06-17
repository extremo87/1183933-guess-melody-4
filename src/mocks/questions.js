const AVATAR_URL = `https://picsum.photos/128`;

export default [
  {
    id: 1,
    type: `genre`,
    genre: `rock`,
    answers: [{
      id: 1,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      id: 2,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      id: 3,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      id: 4,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    id: 2,
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      id: 1,
      picture: `${AVATAR_URL}?random=${Math.random()}}`,
      artist: `John Snow`,
    }, {
      id: 2,
      picture: `${AVATAR_URL}?random=${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      id: 3,
      picture: `${AVATAR_URL}?random=${Math.random()}`,
      artist: `Jim Beam`,
    }],
  }
];
