
import walr from './walr.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import img3 from './3.jpg'
import de from './de.jpg'
import b from './b.jpg'
import React, { useState } from "react";


const Headers = () => {
    const [imageNum, setImageNum] = useState(1);
    const images = [
        { url: walr},
        { url: img3},
        { url: de},
        { url: b},
        
        
      ];
    return ( 
        <div className='headers'>
        <SimpleImageSlider
          
          width="100%"
          height={554}
          images={images}
          showBullets={true}
          showNavs={true}
          onStartSlide = {(index, length) => {
            setImageNum(index);
         }} 
           autoPlay={true}
            autoPlayDelay = {2}
            slideDuration={1.5}
        />
      </div>


     );
}
 
export default Headers;