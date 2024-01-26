import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <div className='sli'>
      <Carousel autoPlay={true} showThumbs={true} showIndicators={true} showArrows={true} showStatus={true}>

        <div>
          <span className='ti'>The Most Important Thing Is Try And Inspire People Son That They Cant Be Greate In Whatever They Want</span>
        <h2 className='koby'>Koby Bryant</h2>
        </div>
        <div>
          <span className='ti'>Something's Lost, Something's Gained, In Living Everyday</span>
          <h2 className='koby'>Joni Mitchell</h2>
        </div>
        <div>
          <span className='ti'>Humility Not Thinking Less Of Yourself, But Thinking Of Yourself</span>
          <h2 className='koby'>C.S. Lewis</h2>
        </div>
      </Carousel>
    </div>
  )
}

export default Slider