import React, {useEffect} from 'react'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from '../logo'
import './index.scss';



function Header() {

  

  return (
    <div id="header">
      <div>
        <Logo></Logo>
      </div>
      <div className="socials">
        <XIcon></XIcon>
        <InstagramIcon></InstagramIcon>
        {/* <GithubIcon></GithubIcon> */}
      </div>
    </div>
  );
}

export default Header;

