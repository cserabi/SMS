import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Review.css';




const Review = () => {
  const [newReview, setnewReview] = useState([]);






  useEffect(() => {

    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setnewReview(data))

  }, [])

  // delete an newReview



  return (
    <div className="container-fluid">
      <h4 className="text-center"> Client Recommendation and Feedback</h4>
      <div className="d-flex justify-content-center align-items-center flex-wrap">

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3"></div>

            <div className="col-md-6">


              <Carousel>

                {
                  newReview.map(reviewer =>


                    <Carousel.Item>
                      <img
                        className="image-bg d-block w-100"
                        src="https://media.istockphoto.com/vectors/triangles-background-vector-id940466680?k=20&m=940466680&s=612x612&w=0&h=jz32ccCcAVH_hFN-bnuelxQU0o5hgQrMFIR_lkMOsCc="

                        alt="First slide"
                      />



                      <Carousel.Caption>
                        <h3 className="text-dark text-center ">{reviewer.name} </h3>

                        <p className="text-dark text-center">{reviewer.review}</p>
                        <h5 className="text-dark text-center"> " {reviewer.comment} " </h5>

                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                }



              </Carousel>






            </div>


            <div className="col-md-3"></div>

          </div>

        </div>


      </div>

    </div >
  );
};

export default Review;