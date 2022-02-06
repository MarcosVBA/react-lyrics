import React from "react";
import api from "./utils/lyrics";
import SplitedLyrics from "./utils/splitedLyrics";
export default class App extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		artist: "",
  		title: "",
  		lyrics: "Escolha uma musica..."
    };
  }

  updateArtist(evt) {
  	const value = evt.target.value
  	this.setState({
  		artist: value,
    });
  }

  updateTitle(evt) {
  	const value = evt.target.value
  	this.setState({
  		title: value,
    })
  }

  searchSong(evt) {
	api
      .get(`/${this.state.artist}/${this.state.title}`)
      .then((response) => this.setState({lyrics: response.data.lyrics}))
      .catch((err) => {
        this.setState({lyrics: "Ops, não encontramos está música."});
      });
  }

  render() {
  	return (
      <div className="LyricsDisplay">
        <div className="inputSpace">
        	<label>
        	  Artista
            <input type="text" value={this.state.artist} className="searchInput" onChange={evt => this.updateArtist(evt)}></input>
          </label>
          <br/>
          <label>
            Nome da Musica
            <input type="text" value={this.state.title} className="searchInput" onChange={evt => this.updateTitle(evt)}></input>
          </label>
          <br/>
          <button className="searchBtn" onClick={evt => this.searchSong(evt)}>Procurar</button>
        </div>
        <SplitedLyrics text={this.state.lyrics} />
      </div>
    );
  }
}