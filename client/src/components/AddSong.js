import React, { useState, useEffect } from "react";
import { addSong, getAllArtists } from "./networkRequests";


export default function AddSong(props) {
  const [state, setState] = useState({
    name: "",
    artistId: "",
    duration: "",
    play_count: "",
    img: "",
  });
  const [artists, setArtists]= useState([])

useEffect(() => {
  getAllArtists().then (res => {
      setArtists(res);
  });
},[])

console.log(artists)
  
const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
}

  const submitSong = () => {
    console.log(state)
    addSong(state)
    .then(refresh);
  };
  const refresh = () => {

    // Write a comment here

    // after adding a song we want to make sure to clear the inputs so a user can add another song
    setState({
    name: "",
    artistid: "",
    duration: "",
    play_count: "",
    img:""
  });


  
    props.refresh();
  }
  
      // Fetch request - getAllArtists in useEffect - reference the refresh function in Home.js (fetchAllSongs)
    // set the artists array to a hook
    // map over artists array and create an option for each artist object
    // text = artist.name / value = artist.id
  
  
  
  return (
    <div className="add-song-wrap">
      <h1>Add Song!</h1>
      {/* Need to use state because thats where the data is
            Array.map*/
      Object.keys(state).map(key => {
                    if (key === 'artistId') {
                        return (
                            <>
                                <label>Artist</label>
                                <select onChange={handleChange} name='artistId' value={state.artistId}>
                                    <option value=''></option>
                                    {artists.map(artist => {
                                        return <option value={artist.id}>{artist.name}</option>
                                    })}
                                </select>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <label>{key}</label>
                                <input onChange={handleChange} name={key} value={state[key]} />
                            </>
                        )
                    }
                })}
            <button onClick={submitSong}>Submit</button>
        </div>
    )
}
            