import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import "./Player.css"
import Footer from './Footer'

function Player({ spotify }) {
    return (
        <div className='player'>


            <div className='player_body'>
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}
export default Player;
