import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import Dashboard from '../Dashboard';

const AddResult = () => {

  const StudentIDRef = useRef();
  const StudentNameRef = useRef();
  const LevelRef = useRef();
  const SemesterRef = useRef();
  const GpaRef = useRef();
  const SessionRef = useRef();
  const DeptRef = useRef();


  const handleAddResult = (e) => {

    const SID = StudentIDRef.current.value;
    const Name = StudentNameRef.current.value;
    const Level = LevelRef.current.value;
    const Semester = SemesterRef.current.value;
    const GPA = GpaRef.current.value;
    const Session = SessionRef.current.value;
    const Department = DeptRef.current.value;





    const newResult = { SID, Name, Level, Semester, Session, GPA, Department };

    fetch('http://localhost:5000/addResult', {

      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },

      body: JSON.stringify(newResult)
    })

      .then(res => res.json())
      .then(data => {
        if (data) {
          alert("Your Result has been add successfully. Thank you !!")
        }
      })


    e.preventDefault();

  }



  return (
    <div>

      <Dashboard>



        <div className="container">
          <h4 className="text-center">Please add new Student Result in System</h4>
          <div className="row">

            <div className="col-md-3"></div>
            <div className="col-md-6 shadow">
              <Form onSubmit={handleAddResult}>
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="Text"
                    placeholder="name@example.com"
                    ref={StudentIDRef}
                  />
                  <label htmlFor="floatingInputCustom">Write your Student ID Number</label>
                </Form.Floating>


                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="Text"
                    placeholder="name@example.com"
                    ref={StudentNameRef}
                  />
                  <label htmlFor="floatingInputCustom">Write your Student Name</label>
                </Form.Floating>


                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="Text"
                    placeholder="name@example.com"
                    ref={LevelRef}
                  />
                  <label htmlFor="floatingInputCustom">Write your Student Level</label>
                </Form.Floating>



                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="Text"
                    placeholder="name@example.com"
                    ref={SemesterRef}
                  />
                  <label htmlFor="floatingInputCustom">Write your Student Semester</label>
                </Form.Floating>


                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="Text"
                    placeholder="name@example.com"
                    ref={GpaRef}
                  />
                  <label htmlFor="floatingInputCustom">Write your GPA </label>
                </Form.Floating>




                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="Text"
                    placeholder="name@example.com"
                    ref={SessionRef}
                  />
                  <label htmlFor="floatingInputCustom">Write your Student Session</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="Text"
                    placeholder="name@example.com"
                    ref={DeptRef}
                  />
                  <label htmlFor="floatingInputCustom">Write your Student Department Name</label>
                </Form.Floating>








                <input to='/addResult' type="submit" value="Submit" className="btn btn-primary btn-organization p-3 w-100 mb-3" />
              </Form>

            </div>
            <div className="col-md-3"></div>
          </div>
        </div>

      </Dashboard >

    </div >
  );
};

export default AddResult;