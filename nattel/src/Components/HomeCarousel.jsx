import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: require('../Assets/Posters-1.png'), 
//    caption:"Banana Chips",
//    description:"The crispy delight of our premium banana chips"
  },
  {
    image:require('../Assets/Posters-2.png'), 
   },
   {
    image:require('../Assets/Posters-3.png'), 
   },
   {
    image:require('../Assets/Posters-4.png'), 
   }  
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="pb-4">
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>    
        <img
          className="d-block w-100 radius-15"
          src={slide.image}
          alt="slider image"
        //   height="500"
        />
        <Carousel.Caption>
          <h3 className="tracking-in-contract">{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
    </div>
  );
}
export default HomeCarousel;