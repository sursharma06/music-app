import React from 'react';

//class SearchBar extends Component {
const SearchBar = ({ songSearch }) => {



    // constructor(props) {
    //   super(props);
    //   this.state = { term: '' };
    // }

    const handleInputChange = (e) => {
      //console.log(e.target.value);
      const searchTerm = e.target.value;
      songSearch(searchTerm);
      // this.setState({ term: e.target.value });
    };

    //render() {
    return (
      <div className="form-group">
    <label htmlFor="search" className="col-sm-2 control-label"></label>
    <div className="col-sm-8" onChange={handleInputChange}>
      <input type="text" className="form-control" id="song" placeholder="Search for a song" />

    </div>
    </div>
    );
  };
//}

export default SearchBar;
