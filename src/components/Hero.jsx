import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hero1 from '../assets/heroheader/hero1.gif'; // Adjust paths as per your project structure
import hero2 from '../assets/heroheader/hero2.png';
import hero3 from '../assets/heroheader/hero3.png';

const Hero = () => {
  return (
    <div className="hero">
      <Carousel
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000} // Change interval as needed
        stopOnHover={false}
        className="w-full"
      >
        <div className="h-96">
          <img src={hero1} alt="Slide 1" className="w-full h-full object-contain" />
        </div>
        <div className="h-96">
          <img src={hero2} alt="Slide 2" className="w-full h-full object-contain" />
        </div>
        <div className="h-96">
          <img src={hero3} alt="Slide 3" className="w-full h-full object-contain" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
