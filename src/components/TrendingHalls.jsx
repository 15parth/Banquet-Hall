import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hall1Image from '../../assets/hall1.jpg';
import "../ComponentStyles/TrendingHalls.css";

function TrendingHall({ id }) {
  return (
    <div className="carousel text-center" id={id} style={{ backgroundColor: 'rgba(167, 160, 160, 0.489)' }}>
      <h1>Trending Halls</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nesciunt delectus sit doloremque fugit numquam incidunt natus odit nihil, aut sed cum rem.
        Pariatur possimus saepe accusantium quod minima, eos rerum!</p>
      <Carousel className="slider" style={{ backgroundColor: 'rgba(167, 160, 160, 0.489)' }}>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className='img-fluid img-responsive'
              src={hall1Image}
              alt='ReactHunt'
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className='img-fluid img-responsive'
              src={hall1Image}
              alt='ReactHunt'
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className='img-fluid img-responsive'
              src={hall1Image}
              alt='ReactHunt'
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TrendingHall;
