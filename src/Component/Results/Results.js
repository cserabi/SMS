import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

import './Results.css';

const Results = () => {


  const [resultID, setResultID] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    fetch('http://localhost:5000/addResult')
      .then(res => res.json())
      .then(data => {
        setResultID(data)
      });
  }, []);

  console.log(resultID);
  const singleResult = resultID.find(result => result.SID === query)
  console.log(singleResult);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(query);

    // return await axios.get(`http://localhost:5000/addResult/${query}`)
    //   .then((res) => { setResultID(res.data); })
    //   .catch((err) => console.log(err));
  }


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-4">

        </div>
        <div className="col-4 result-box">
          <h5>Please Check Your Results</h5>
          <form onSubmit={handleSubmit}>
            <input type="text" class="form-control mb-3" id="exampleFormControlInput1"
              placeholder="Please Enter Your Student ID" value={query} onChange=
              {(e) => setQuery(e.target.value)}
            />

            <button class="btn btn-custom mb-3"
            // onClick={(e) => handleResults(e)}
            >Submit</button>

          </form>
        </div>
        <div className="col-4">

        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 mb-4">


            <div className="card-body shadow bg-card">
              {/* 
              <p className="card-text font-bold congra-text"><span className='congra-text-pro'>Congratulation !!</span> Check out your result. Thank you  </p>
              <h5 className="card-title text-white">Student ID : {singleResult.SID}  </h5>
              <h5 className="card-title text-white">  Student Name : {singleResult.Name} </h5>
              <h5 className="card-title text-white">Level : {singleResult.Level} Semester : {singleResult.Semester} </h5>
              <h5 className="card-title text-white ">  GPA : {singleResult.GPA}</h5>
              <h5 className="card-title text-white"> Session: {singleResult.Session} </h5>
              <h5 className="card-title text-white">  Departmet Name : {singleResult.Department}</h5> */}

              <p className="card-text font-bold congra-text"><span className='congra-text-pro'>Congratulation !!</span> Check out your result. Thank you  </p>
              <h5 className="card-title text-white">Student ID : 1802036   </h5>
              <h5 className="card-title text-white">  Student Name : Md Rabiul Islam </h5>
              <h5 className="card-title text-white">Level : 4 Semester : 1</h5>
              <h5 className="card-title text-white ">  GPA :3.69 </h5>
              <h5 className="card-title text-white"> Session:2018 </h5>
              <h5 className="card-title text-white">  Departmet Name : CSE</h5>



              {/* <Button className="updatebtn">Update</Button>  */}


            </div>

          </div>
          <div className="col-md-4"></div>
        </div>
      </div>



      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4">

          {/* {
            items.map(itemvar => <Card

              item={itemvar}
            ></Card>)
          } */}


          {
            //  ResultID.findOne(stuID => stuID.SID === ) 
          }
        </div>




      </div>


    </div >


  );
};

export default Results;