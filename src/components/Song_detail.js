import React from 'react';
var SC = require('soundcloud');

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Loading...</div>;
  }

  const url = SC.stream('/tracks/' + song.id).then(function (player) {
    player.play();
  });

  return (
    <div className="song-detail col-sm-8 col-sm-offset-2">
      <div className="embed-responsive-item col-sm-8">
        <audio controls><source src={url} type="audio/mp3"/></audio>
      </div>
      <div className="details">
        <div>{song.title}</div>
      </div>
    </div>
  );
};

export default SongDetail;
