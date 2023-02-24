import React from 'react'
import './Slider.css'
import { useInView } from 'react-intersection-observer';


const Slider = ({imageSrc, title, subtitle, flipped}) => {

  const {ref, inView} = useInView({
    threshold: 0.4,
  });

 const renderContent = () => {
    if (flipped){
        return <>
        <img src={imageSrc} alt="WeddingPhoto" className='slider_image' />
        <div className='slider_content'>
           <h1 className='slider_title'>{title}</h1>
           <p className='slider_subtitle'>{subtitle}</p>
            </div>
        </>
    } else{
        return <>
                <div className='slider_content'>
           <h1 className='slider_title'>{title}</h1>
           <p className='slider_subtitle'>{subtitle}</p>
           </div>
           <img src={imageSrc} alt="WeddingPhoto" className='slider_image' />
            
        </>
    }
}

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
      
    </div>
  )
}

export default Slider;
