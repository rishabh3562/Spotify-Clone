import React from 'react'
import './login.css'
import { loginUrl } from './spotify'



import spotifyLogo from "./SpotifyLogo.png"
function Login() {
    return (
        <div className='login'>
            <img src={spotifyLogo} alt="Spotify"></img>

            <a href={loginUrl}>LOGIN TO SPOTIFY</a>
        </div>
    )
}


export default Login;