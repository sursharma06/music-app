import React from 'react';
import SongListItem from './Song_list_item';

const SongList = (props) => {
  const songItems = props.songs.map((song) => {
    return (
      <SongListItem
      key={song.id}
      song={song}
      onSongSelect={props.onSongSelect}
      />
    );
  });
  return (
    <div className="col-sm-8 col-sm-offset-2">

    <br/>
    <ul>
      {songItems}
    </ul>

    </div>
  );
};

export default SongList;
