import React from "react";
import {useState} from 'react'
import "../Services.css"
import Slider from 'react-slick'
import car1 from "../assets/camry.png";
import car2 from "../assets/civic.png";
import car3 from "../assets/merc.png";
import car4 from "../assets/scorpio.png";
import car5 from "../assets/corolla.png";


import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Services() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  }
  const hostelCards = [
    {
      imageSrc:
           car1,
      title: 'car1',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 50/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
         car2,
      title: 'car2',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 80/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc: car3,
      title: 'car3',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 150/Day',
      features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
    },
    {
      imageSrc: car4,
      title: 'car4',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
    {
      imageSrc: car5,
      title: 'car5',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
  ]

  return (
    <div className='content'>
      <button onClick={() => sliderRef?.slickPrev()} >
        <FaAngleLeft />
      </button>
      <button onClick={() => sliderRef?.slickNext()}>
        <FaAngleRight />
      </button>
      <Slider ref={setSliderRef} {...sliderSettings}>
      {hostelCards.map((card, index) => (
          <div key={index} className="Card">
            <h2>{card.title}</h2>
            <img alt={card.title} src={card.imageSrc}  />
            <p>{card.description}</p>
            <ul>
              {card.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className='btn'>Buy Now</button>
          </div>
        ))}
      </Slider>
    </div>
  )
}