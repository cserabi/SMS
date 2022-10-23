import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Schedule.css';

const Schedule = ({ slice }) => {


  const [newSchedule, setNewSchedule] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/addSchedule', {

      method: 'GET',
    })

      .then(res => res.json())
      .then(data => setNewSchedule(data))

  }, [])


  //delete an Schedules

  const handleDeleteSchedule = id => {
    const proceed = window.confirm('Are you sure , you want to delete?')

    if (proceed) {
      const url = `http://localhost:5000/addSchedule/${id}`;
      fetch(url, {

        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('deleted successfully');

            const remainingSchedule = newSchedule.filter(Schedule => Schedule._id !== id)
            setNewSchedule(remainingSchedule);
          }
        })


    }

  }

  // useEffect(() => {

  //   fetch('http://localhost:5000/addSchedule')
  //     .then(res => res.json())

  //     .then(data => setNewSchedule(data))

  // }, [])

  return (
    <div className="container-fluid">
      <h4 className="text-center">Upcoming Schedule For CSE Final Year Student</h4>
      <div className="d-flex justify-content-center align-items-center flex-wrap">

        {


          newSchedule.slice(0, slice).map(ScheduleList =>
            <div className="card shadow my-4 m-3" style={{ width: '18rem' }}>




              <div className="card-body">
                <p className="card-text font-bold Course-bg">Course Name : {ScheduleList.name}</p>
                <p className="card-text"> <span>Schedule Date :</span>  {ScheduleList.Date}</p>
                <p className="card-text">  <span>ExamPattern :</span> {ScheduleList.ExamPattern}</p>
                <p className="card-text"><i class="fa-solid fa-clock"></i> <span>Time :</span> {ScheduleList.TimeHour} <i class="fa-solid fa-medal"></i> <span>Marks :</span> {ScheduleList.Marks}</p>

                <p className="card-text"> <i class="fa-solid fa-user"></i> <span>Posted By :</span> {ScheduleList.Post} <i class="fa-solid fa-hexagon-check"></i></p>

                <Button className="updatebtn">Update</Button> <Button className="deletebtn" onClick={() => handleDeleteSchedule(ScheduleList._id)}>Delete</Button>

              </div>
            </div>

          )
        }


      </div>

    </div >

  );
};

export default Schedule;