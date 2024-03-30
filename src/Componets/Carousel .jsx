import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    "https://i.ibb.co/zZhDTPS/peakpx-6.jpg",
    "https://i.ibb.co/mBp5zrK/peakpx-5.jpg",
    "https://i.ibb.co/TLMm4Cv/peakpx-4.jpg",
    "https://i.ibb.co/hRgg7mb/peakpx-3.jpg",
    "https://i.ibb.co/nRC0J40/peakpx-2.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className='flex  justify-center items-center'>
      <div className="relative  w-11/12 mt-4" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((image, index) => (
            <div key={index} className={`duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`} data-carousel-item>
              <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button key={index} type="button" className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} aria-current={index === currentIndex} aria-label={`Slide ${index + 1}`} onClick={() => setCurrentIndex(index)}></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
