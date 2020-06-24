const AVATAR_URL = `https://picsum.photos/128`;

export default [
  {
    id: 1,
    type: `genre`,
    genre: `rock`,
    answers: [{
      id: 123,
      src: `https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-OGG-File.ogg`,
      genre: `rock`,
    }, {
      id: 222,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      id: 321,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      id: 423,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    id: 333,
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/ru/b/b6/Jon_Bon_Jovi-_Blaze_Of_Glory.ogg`,
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
  }, {
    id: 323,
    type: `artist`,
    song: {
      artist: `Bon Jovi`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      id: 1,
      picture: `${AVATAR_URL}?random=${Math.random()}}`,
      artist: `Aerosmith`,
    }, {
      id: 2,
      picture: `${AVATAR_URL}?random=${Math.random()}`,
      artist: `Bon Jovi`,
    }, {
      id: 3,
      picture: `${AVATAR_URL}?random=${Math.random()}`,
      artist: `Rolling Stones`,
    }],
  },
  {
    id: 456,
    type: `artist`,
    song: {
      artist: `Rammstein`,
      src: `https://upload.wikimedia.org/wikipedia/ru/b/b5/Rammstein_-_Amerika.ogg`,
    },
    answers: [{
      id: 1,
      picture: `${AVATAR_URL}?random=${Math.random()}`,
      artist: `Rammstein`,
    }, {
      id: 2,
      picture: `${AVATAR_URL}?random=${Math.random()}`,
      artist: `Metallica`,
    }, {
      id: 3,
      picture: `${AVATAR_URL}?random=${Math.random()}`,
      artist: `Sting`,
    }],
  },
];
