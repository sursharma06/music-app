import React, { Component } from 'react';
import SearchBar from './components/Search_Bar';
import SongList from './components/Song_list';
import SongDetail from './components/Song_detail';
// import Users from './Users';
import './App.css';

var SC = require('soundcloud');

SC.initialize({
  client_id: '86b6a66bb2d863f5d64dd8a91cd8de94',
});

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      songs: [],
      selectedSong: null,
    };
    this.songSearch('top 50');
  }

  songSearch = (term) => {
    fetch('https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + term)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            songs: result,
            selectedSong: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  render() {

    return (
      <div className="App">
        <SearchBar songSearch={this.songSearch}/>
        <SongDetail song={this.state.selectedSong}/>
        <SongList
        onSongSelect={selectedSong => this.setState({ selectedSong })}
        songs={this.state.songs}/>

      </div>
    );
  }
};

export default App;
