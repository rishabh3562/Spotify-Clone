import React, { useEffect } from 'react'
import './App.css';
import SpotifyWebApi from "spotify-web-api-js";
import Login from './Login';
import { getTokenFromResponse } from './spotify'
// import { Simulate } from 'react-dom/test-utils';
import Player from './Player';
import { useStateValue } from './StateProvider'




const spotify = new SpotifyWebApi();


function App() {
  //RUn code based on a given condition

  //bringing user from context using destructuring and dispatch that gives the data to the context
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    //getting token from url
    const hash = getTokenFromResponse();
    //striping the right part (making it clean)
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });


      spotify.setAccessToken(_token);


      //gets user info
      spotify.getMe().then((user) => {
        //shoot data into context
        dispatch({
          type: "SET_USER",
          user: user
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist('37i9dQZEVXcUagOto2RM0C').then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response

        })
      })
    }

    console.log("(from the useEffecthook code) token is : " + token);
  }, [token, dispatch])

  console.log(`😎😎😎😎😎😎😎`, user);
  console.log(`Token after useEffect hook☕☕☕☕☕☕☕`, token);

  return (
    <div className="App">
      {
        token ? (<Player spotify={spotify} />) : (<Login />)
      }

    </div>
  );
}

export default App;
