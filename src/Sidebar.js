import React from 'react'
import "./sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from './StateProvider'
function Sidebar() {
    //indirect way of pulling objects from context i.e useContext(StateContext);
    const [{ playlists }] = useStateValue();
    // console.log("useStateVlaue in sidebaar.js 👉👉👉👉👉👉👉", useStateValue());

    return (
        <div className='sidebar'>
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />

            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Seacrh" />
            <SidebarOption Icon={LibraryMusicIcon} title="your Library" />
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr />
            {/* {console.log(`playlists in sidebar.js is:👉👉👉👉`)}
            {console.log(playlists)}
            {console.log(`playlists.items[0].name in sidebar.js is:👉👉👉👉`)}
            {console.log(playlists.items[0].name)}
            { } */}
            {playlists?.items?.map((Myplaylist) => (
                <SidebarOption key={Myplaylist.id} title={Myplaylist.name} />
            ))}
            {/* <SidebarOption title={playlists.items[0].name} /> */}
            {/* <SidebarOption title="Hip Hop" />
            <SidebarOption title="Rock" />
            <SidebarOption title="RnB" />
            <SidebarOption title="Home" /> */}
            {/* <HomeIcon />
            <LibraryMusicIcon />
            <SearchIcon /> */}
        </div>
    )
}

export default Sidebar
