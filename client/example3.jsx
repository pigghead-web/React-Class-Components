// * Look at the main usage/advantage of REACT do dynamically update information on the scren

class SongContainer extends React.Component {
  // Default state
  constructor(props) {
    super(props);
    
    this.state = {
      songs: props.songs,
    };
    
    this.loadSongsFromServer = this.loadSongsFromServer.bind(this);
    this.loadSongsFromServer();
  }
  
  loadSongsFromServer() {
    const xhr = new XMLHttpRequest();  // new ajax request
    
    //xhr.open('GET', '/getSongs');
    
    const setSongs = () => {
      const songResponses = JSON.parse(xhr.response);
      
      this.setState({ songs: songResponses });
    };
    
    xhr.onload = setSongs;  // set ajax onload function
    xhr.open('GET', '/getSongs');  // set request to /getSongs
    xhr.send();  // send request
  }
  
  render() {
    if(this.state.songs.length === 0) {  // check for songs
      return (
        <div>
          <h3>No Songs Yet!</h3>
        </div>
      );
    }
    
    // Array that will b the result of map function
    const songList = this.state.songs.map((songs) => {
      return (
        <div>
          <h2>{song.artist} - <i>{song.title}</i></h2>
        </div>
      );
    });
    
    return (
      <div>
        <h1>My Favorite Songs!</h1>
        {songList}
      </div>
    );
  }
}

const init = () => {
  ReactDOM.render(
    <SongContainer songs={[]}/>,
    document.getElementById('app')
  );
};

window.onload = init;