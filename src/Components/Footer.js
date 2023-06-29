import React from 'react'
import "./footer.css"
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
// import Box from '@mui/material/Box';

import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_left">
                <img className='footer_albumLogo' src="https://i.pinimg.com/736x/08/87/bb/0887bb9dae29db6452bc41650406c120.jpg" alt="" />
                <div className="footer_songInfo">
                    <h4>Yeah...</h4>
                    <p>Usher!</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineOutlinedIcon fontSize='large' className='footer__icon' />
                {/* <RepeatIcon className="footer__green" /> */}
                <SkipNextIcon className="footer__icon" />
                <RepeatRoundedIcon className="footer__icon footer__green" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>

            </div>

        </div>
    )
}

export default Footer
