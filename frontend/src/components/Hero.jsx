import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const images = [assets.hero_img, assets.hero_img2, assets.hero_img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col sm:flex-row border mt-10 border-[#fab5ef] rounded bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)]">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-10">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">Explore our Collection</p>
          </div>
          <h1 className="lustria-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed animate-fade-in">New Products</h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">Shop Now</p>
            <p className="w-8 md:w-11 h-px bg-[#414141]"></p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 relative flex items-center justify-center">
        <img src={images[currentIndex]} alt="" className="w-full h-auto transition-transform duration-500"/>
        <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white">&#8592;</button>
        <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white">&#8594;</button>
      </div>
    </div>
  );
};

export default Hero;
