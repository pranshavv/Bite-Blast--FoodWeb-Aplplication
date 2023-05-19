import React from "react";
import arrow from "../Assets/arrow.png";
import burger from "../Assets/burger.png";
import icecream from "../Assets/icecrem.png";
import food from "../Assets/food.png";
import pastry from "../Assets/pastry.png";
import coffe from "../Assets/coffe.png";
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';




function Hero() {

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuClicked(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsMenuClicked(true);
  };
  return (
    <header>
      <div className="header-section">
        <div className="hero-heading">
          <h1 className="heading-primary">Delicious <br/> Food Is Waiting <br/> For You</h1>
          <Link to="scroll-container" smooth={true} duration={50}> 
          <button className="button button-active view-menu" onClick={handleClick}>View Menu 
          <img className="img-m" src={arrow}  alt="Arrow right"/>
          </button>
          </Link>

          <div className="food-categories food-categories-1">
            <button><img src={burger} className="food-icons" title="Burger" alt="Burger"/></button>
            <button><img src={pastry} className="food-icons" title="Cake" alt="Cake"/></button>
            <button><img src={coffe} className="food-icons" title="Coffee" alt="Coffee"/></button>
            <button><img src={icecream} className="food-icons" title="Ice" alt="Ice"/></button>
          </div>
        </div>

        <div className="header-image">
          <img src={food} alt="Vegetable eggs"/>
        </div>
      </div>
    </header>
  );
}

export default Hero;