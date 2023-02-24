import React, { useState } from 'react'
import './home.css';
import wedding1 from '../../assets/wedding.jpg';
import wedding2 from '../../assets/wedding1.jpeg';
import wedding3 from '../../assets/wedding3.webp';
import baptism from '../../assets/baptism.webp';
import baptism2 from '../../assets/baptism2.jpg';
import Slider from '../../pages/home/Slider';
import Hero from './Hero';

const Home = ({ imageSrc }) => {

  return (
    <div className='Home'>
      <Hero imageSrc={wedding2} />
      <Slider imageSrc={wedding1} title={"On my own I’m only half of what I could be."} subtitle={"Blake Shelton"}/>
      <Slider imageSrc={wedding3} title={"A successful marriage requires falling in love many times, always with the same person."} subtitle={"Mignon McLaughlin"} flipped={true} />
      <Slider imageSrc={baptism} title={"Baptism is the initial step of a faithful heart."} subtitle={"Max Lucado"}/>
      <Slider imageSrc={baptism2} title={"When we were baptized we took upon us not only the name of Christ, but also the law of obedience."} subtitle={"Robert D. Hales"} flipped={true} />
    </div>


  )
}

export default Home;