import React ,{useEffect, useState} from "react";
import "../About.css"; 
import car1 from "../assets/camry.png"
import ReactCardFlip from "react-card-flip";
import car2 from "../assets/civic.png"
import car3 from "../assets/merc.png"
import car4 from "../assets/scorpio.png"
import car5 from "../assets/corolla.png"


const txt=[
  
    "Welcome to XYZ Taxi Rental Service! We are a leading provider of reliable and comfortable taxi rental services in the city.With a fleet of well-maintained and air-conditioned taxis, we ensure that you travel in style and comfort to your destination.",
  
  
    "Our team of professional and experienced drivers is committed to providing excellent customer service and safe transportation. Whether you need a taxi for a short trip within the city or a long-distance journey, we've got you covered.",
  
  
    "At XYZ Taxi Rental Service, we prioritize customer satisfaction and strive to make your travel experience enjoyable and hassle-free. Our transparent pricing, punctual service, and clean taxis set us apart from the rest. "
  
]
const images=[car1, car2, car3, car4, car5]

const About = () => {
  const [currentImage, setCurrentImage] = useState(car1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const flipTimer = setInterval(() => {
      setFlip(prevFlip => !prevFlip);
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(flipTimer);
    };
  }, []);
    const [currenttext, setCurrenttext] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrenttext(txt[Math.floor(Math.random() * txt.length)]);
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [])

  return (
    <section className="about-us-section" id="about">
      <div className="container">
        <div className="row">
        <h2 className="section-title">About Us</h2>
          <div className="col-md-6">
          
            <p className="text">
              {currenttext}
            </p>
          </div>
          <div className="col-md-6">
            
          <ReactCardFlip isFlipped={flip} flipDirection="vertical">
      <div>
        <img
          src={images[currentImageIndex]}
          alt="Front Image"
          style={{
            width: "500px",
            height: "400px",
            background: "white",
            fontSize: "40px",
            color: "green",
            margin: "20px",
            borderRadius: "4px",
            textAlign: "center",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}
        />
      </div>
      <div>
        <img
          src={images[currentImageIndex]}
          alt="Back Image"
          style={{
            width: "500px",
            height: "400px",
            background: "white",
            fontSize: "40px",
            color: "blue",
            margin: "20px",
            borderRadius: "4px",
            boxShadow: "grey",
            textAlign: "center",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}
        />
      </div>
    </ReactCardFlip>
           
          </div>
        </div>
      </div>
    </section>
  );
};
  

export default About;
