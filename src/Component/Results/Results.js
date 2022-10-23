import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

import './Results.css';

const Results = () => {


  const [resultID, setResultID] = useState();





  const handleResults = (e) => {

    e.preventDefault();

    console.log('new value')


    fetch(`http://localhost:3000/results/${resultID}`)
      .then(res => res.json())

      .then(data => console.log(data))





  }


  // const items = [

  //   {
  //     name: 'First Name', description: 'This is the first description of the images',
  //     img: 'https://i.pinimg.com/736x/13/89/e2/1389e2393465bddc2f1e9763ba63539e--hd-laptop-wallpapers-hd-wallpaper.jpg'
  //   },

  //   {
  //     name: 'Second Name', description: 'This is the first description of the images',
  //     img: 'https://i.pinimg.com/736x/13/89/e2/1389e2393465bddc2f1e9763ba63539e--hd-laptop-wallpapers-hd-wallpaper.jpg'
  //   },
  //   {
  //     name: 'Third Name', description: 'This is the first description of the images',
  //     img: 'https://i.pinimg.com/736x/13/89/e2/1389e2393465bddc2f1e9763ba63539e--hd-laptop-wallpapers-hd-wallpaper.jpg'
  //   },

  //   {
  //     name: 'Four Name', description: 'This is the first description of the images',
  //     img: 'https://i.pinimg.com/736x/13/89/e2/1389e2393465bddc2f1e9763ba63539e--hd-laptop-wallpapers-hd-wallpaper.jpg'
  //   },
  //   {
  //     name: 'Five Name', description: 'This is the first description of the images',
  //     img: 'https://i.pinimg.com/736x/13/89/e2/1389e2393465bddc2f1e9763ba63539e--hd-laptop-wallpapers-hd-wallpaper.jpg'
  //   },
  //   {
  //     name: 'Six Name', description: 'This is the first description of the images',
  //     img: 'https://i.pinimg.com/736x/13/89/e2/1389e2393465bddc2f1e9763ba63539e--hd-laptop-wallpapers-hd-wallpaper.jpg'
  //   },


  // ]





  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-4">

        </div>
        <div className="col-4 result-box">


          <h5>Please Check Your Results</h5>

          <form >
            <input type="text" class="form-control mb-3" id="exampleFormControlInput1"
              placeholder="Please Enter Your Student ID" onChange=
              {(e) => setResultID(e.target.value)}
            />

            <button class="btn btn-custom mb-3" onClick={(e) => handleResults(e)}>Submit</button>

          </form>


        </div>
        <div className="col-4">

        </div>
      </div>



      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4">

          {/* {
            items.map(itemvar => <Card

              item={itemvar}
            ></Card>)
          } */}


        </div>
      </div>

    </div>
  );
};

export default Results;