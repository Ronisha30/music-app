import React from 'react';
import { addSong } from './networkRequests';

class AddSong extends React.Component {
    state = {
       artistId: "",
       name: "",
       duration: "",
        play_count:"",
        img:""

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = () => {
        addSong(this.state);
    }

    render(){
        return(
            <div className="add-song-wrap">
                <h1>Add Song!</h1>
                <label>Artist: </label>
                <input onChange={this.handleChange} value={this.state.artistId} name="artistId"></input>
                <label>Song name: </label>
                <input onChange={this.handleChange} value={this.state.name} name="name"></input>
                <label>Duration: </label>
                <input onChange={this.handleChange} value= { this.state.duration} name="duration"></input>
                <label>Play_count: </label>
                <input onChange={this.handleChange} value={this.state.play_count}  name="play_count"></input>
                <label>Image: </label>
                <input onChange={this.handleChange} value={this.state.img} name="img"></input>
                <button onClick={this.onClick}>Submit</button>
            </div>
        )
    }
}

export default AddSong;