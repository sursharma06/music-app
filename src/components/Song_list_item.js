import React from 'react';

const SongListItem = ({ song, onSongSelect }) => {
  console.log(song);
  return (
    <li className="list-group-item" onClick={()=> onSongSelect(song)}>
      <div className="song-list media">
        <div className="media-left">
          <img className="media-object" src={song.artwork_url} alt={song.description}/>
        </div>

      <div className="media-body">
      <div className="media-heading">{song.title}</div>
      </div>
      </div>
    </li>
  );
};

export default SongListItem;
