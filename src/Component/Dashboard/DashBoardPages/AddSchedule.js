import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import Dashboard from '../Dashboard';



const AddSchedule = () => {
  const CourseNameRef = useRef();
  const ExamPatternRef = useRef();
  const TimeRef = useRef();
  const MarkRef = useRef();
  const PostRef = useRef();
  const ScheduleDateRef = useRef();

  const handleAddSchedule = (e) => {

    const name = CourseNameRef.current.value;
    const ExamPattern = ExamPatternRef.current.value;
    const TimeHour = TimeRef.current.value;
    const Marks = MarkRef.current.value;
    const Post = PostRef.current.value;
    const Date = ScheduleDateRef.current.value;

    const newSchedule = { name, ExamPattern, Date, TimeHour, Marks, Post };

    fetch('http://localhost:5000/addSchedule', {

      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },

      body: JSON.stringify(newSchedule)
    })

      .then(res => res.json())
      .then(data => {
        if (data) {
          alert("Your Schedule has been successfully Completed . Thank you !!")
        }
      })


    e.preventDefault();

  }

  return (
    <Dashboard>



      <div className="container">
        <h4 className="text-center">Please add new Schedule in SMS System</h4>
        <div className="row">

          <div className="col-md-3"></div>
          <div className="col-md-6 shadow">
            <Form onSubmit={handleAddSchedule}>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="Text"
                  placeholder="name@example.com"
                  ref={CourseNameRef}
                />
                <label htmlFor="floatingInputCustom">Write your Course Name</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"

                  ref={ExamPatternRef}

                />

                <label htmlFor="floatingPasswordCustom">Write your Exam Pattern </label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"

                  ref={ScheduleDateRef}

                />

                <label htmlFor="floatingPasswordCustom">Write your Schedule Date </label>
              </Form.Floating>

              <Form.Floating className="mb-3">

                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="text"
                  ref={TimeRef}
                />
                <label htmlFor="floatingPasswordCustom">Write your schedule duration </label>
              </Form.Floating>
              <Form.Floating className="mb-3">

                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="text"
                  ref={MarkRef}
                />
                <label htmlFor="floatingPasswordCustom">Write the mark of this Schedule </label>
              </Form.Floating>
              <Form.Floating className="mb-3">

                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="text"
                  ref={PostRef}
                />
                <label htmlFor="floatingPasswordCustom">Please Write the writter name of the Post </label>
              </Form.Floating>

              <input to='/addSchedule' type="submit" value="Submit" className="btn btn-primary btn-organization p-3 w-100 mb-3" />
            </Form>

          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

    </Dashboard>
  );
};

export default AddSchedule;