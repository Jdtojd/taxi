import React, { useEffect, useState, useRef } from 'react';
import '../home.css';
import { gsap } from 'gsap';
import car1 from '../assets/camry.png';
import car2 from '../assets/civic.png';
import car3 from '../assets/merc.png';
import car4 from '../assets/scorpio.png';
import car5 from '../assets/corolla.png';
const images = [car1, car2, car3, car4, car5];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(car1);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;

    // Observer to track when the image container enters and exits the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Image container is on screen
          setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }
      });
    });

    if (imageContainer) {
      observer.observe(imageContainer);
    }

    // Animation function
    function animateImgContainer() {
      gsap.from('.imgcontainer', {
        ease: 'power2.out',
        right: 100,
        x: 700,
        duration: 3,
        repeat: -1,
      });
    }

    // Start animation on component mount
    animateImgContainer();

    // Cleanup functions
    return () => {
      clearInterval(intervalId);
      observer.disconnect();
      gsap.killTweensOf('.imgcontainer');
    };
  }, []); // Empty dependency array to run only on mount

  // Interval to change images
  const intervalId = setInterval(() => {
    setCurrentImage(images[Math.floor(Math.random() * images.length)]);
  }, 3000);

  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1 className="hero__title">
            Find, book, rent a car—quick and super easy!
          </h1>
          <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
        </div>

        <div className="hero__image-container" ref={imageContainerRef}>
          <div className="hero__image">
            <img className="imgcontainer" src={currentImage} alt="Car" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
