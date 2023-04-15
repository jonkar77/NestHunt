import React from 'react';
import Typewriter from "typewriter-effect";
import '../../CssFiles/Home.css';

const Home=() => {
  return (
    <div className="search-bar-container">
      <div className="background-image"></div>
      <div className="text">
        <h1>

          <Typewriter

            onInit={(typewriter) => {

              typewriter
              .changeDelay(30)
                .typeString("A house is made of walls and beams;")
                .changeDelay(30)
                // .pauseFor(10)
                .deleteAll()
                .typeString("Home is built with love and dreams.")
                .start();
            }}
          />
        </h1>
      </div>
     
      <div className="search-bar">
        <input type="text" placeholder="Location, Zipcode..." />
        <button>Go</button>
      </div>
      <button className="add-property-button">Add a Property</button>
    </div>
  );
  
};

export default Home;
