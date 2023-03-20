import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./footer.css";

function Footer() {
  const FacebookURL = () => {window.location.href ="https://www.facebook.com/PonoCraftsStore" }
  const InstagramURL = () => {window.location.href ="https://www.instagram.com/ponocrafts/?fbclid=IwAR3Jr4iTu6pn_Bly5UrRxGuOzMDmBVpA_x2NXepliN4hjpVJfk5Z_7Upqp8"}
  const YouTubeURL = () => {window.location.href ="https://www.youtube.com/channel/UCpf0ZYnLD8Xb2H0yvqFy_TA"}
  const LinkedInURL = () => {window.location.href ="https://www.linkedin.com/in/alexandrabucataru/"}
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon onClick={InstagramURL} target="_blank"/>
            <YoutubeIcon id="youtube" onClick={YouTubeURL} target="_blank"/>
            <FacebookIcon onClick={FacebookURL} target="_blank"/>
            <LinkedInIcon onClick={LinkedInURL} target="_blank"/>
        </div>
        <p> &copy; {new Date().getFullYear()} O~Vis</p>
   
    </div>
  )
}

export default Footer;