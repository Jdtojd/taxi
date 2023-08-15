import React, { useState, useEffect } from 'react';
import './card.css'; // Import your CSS for styling if needed
import car1 from "../assets/camry.png"
import car2 from "../assets/civic.png"
import car3 from "../assets/merc.png"
import car4 from "../assets/scorpio.png"
import car5 from "../assets/corolla.png"


 const images=[car1, car2, car3, car4, car5]



function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipped(prevFlipped => !prevFlipped);

      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(flipInterval);
  }, []);

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-inner">
        <div className="card-front">
          <img src={images[currentIndex]} alt="Front" />
        </div>
        <div className="card-back">
          <img src="back.jpg" alt="Back" />
        </div>
      </div>
    </div>
  );
}

export default Card;
