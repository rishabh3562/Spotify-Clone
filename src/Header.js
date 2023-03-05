import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useStateValue } from './StateProvider'

function Header() {
    const [{ user }] = useStateValue();
    console.log(`user in header.js 👇👇👇👇👇`, user);

    return (
        <div className='header'>
            <div className="header_left">

                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>

            <div className="header_right">

                <Avatar alt={user?.display_name} src={user?.images[0].url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
