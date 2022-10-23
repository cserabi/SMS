import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (

    <div className="container-fluid">
      <div className="row">

        <div className="col-md-12">


          <Carousel>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/c4Knp90W/Banner-01.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="Text-custom" >Mobile Gadget</h3>
                <p className="Text-custom" >High quality product with warrenty 2 years.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/XNrKW7kt/Banner-02.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="Text-custom-pro w-25">Manage Your Semester <br>
                </br>
                  As per your Schedule</h3>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/ht53S370/Banner-03.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="Text-custom-pro-new w-25">Publish Your Routine , Notice and Check Result </h3>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

      </div>

    </div>
  );
};

export default Banner;