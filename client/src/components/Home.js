import React,{useEffect, useState} from 'react';
import AddSongs from './AddSong';
import AddArtists from './AddArtist';
import { getAllSongs } from './networkRequests';
export default function Home(){
     const [songs, setSongs] = useState([]);
     
     const refresh = () => {
        getAllSongs().then(res => {
            setSongs(res);
        });
    }
     
      useEffect(refresh, []);
        
        return (
            <div>
                <AddSongs refresh={refresh}/>
                <AddArtists refresh={refresh}/>
                <ul>
                    {songs.map(song => <li key={song.id}>{song.name}</li>)}
                </ul>
            </div>
        )
    }
