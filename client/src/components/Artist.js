import React from 'react';
import { addArtists } from './networkRequests';

class AddArtists extends React.Component {
    state = {
        name: "",
        age: "",
        img:""

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = () => {
        AddArtists(this.state);
    }

   render(){
       return(
           <div className="add-artist-wrap">
           <h1>Add Artist</h1>
            <label>Artist: </label>
            <input onChange={this.handleChange} value={this.state.artistsName} name="name"></input>
            <label>Age: </label>
            <input onChange={this.handleChange} value={this.state.age} name="age"></input>
            <label>Image: </label>
            <input onChange={this.handleChange} value={this.state.img} name="img"></input>
            <button onClick={this.onClick}>Submit</button>
           </div>
       )
   }
}

export default AddArtists;