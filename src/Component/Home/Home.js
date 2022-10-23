import React from 'react';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Exlpore';
import Review from '../Review/Review';
import Schedule from '../Schedule/Schedule';


import './Home.css';


const Home = () => {
  const slice = 8;
  return (

    <div>
      <Banner></Banner>
      {/* <Explore slice={slice}></Explore> */}
      <Schedule slice={slice}></Schedule>


      <Review></Review>

    </div>
  );
};

export default Home;