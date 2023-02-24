import './Hero.css';



const Hero = ({ imageSrc }) => {

  return (
    <div className='Hero'>
      <img src={imageSrc} alt="WeddingPhoto" className='hero_image' />
      
    </div>
    

  )
}

export default Hero;