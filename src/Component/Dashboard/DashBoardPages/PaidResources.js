import React from 'react';
import Dashboard from '../Dashboard';
import './paidResource.css';

const PaidResources = () => {
  return (
    <Dashboard>
      <div className='container'>
        <h3>This is Paid Resource Allocation</h3>
        <div className='row' >
          <div className='col-md-4'>
            <div className="card" style={{ width: "18rem" }}>

              <div className="card-body">
                <h5 className="card-title text-title">Udemy for Computer Science</h5>
                <p className="card-text">UserName: hstucse <br />
                  Pass: #$8743rabi
                </p>
                <p className="card-text"></p>

                <a href="https://www.udemy.com/" className="btn btn-primary btn-name">Udemy</a>
              </div>
            </div>

          </div>
          <div className='col-md-4'>
            <div className="card" style={{ width: "18rem" }}>

              <div className="card-body">
                <h5 className="card-title text-title">Coursera for Computer Science</h5>
                <p className="card-text">UserName: hstucse <br />
                  Pass: #$8743cse
                </p>
                <a href="https://www.tutorialspoint.com/" className="btn btn-primary btn-name">Coursera</a>
              </div>
            </div>

          </div>
          <div className='col-md-4'>
            <div className="card" style={{ width: "18rem" }}>

              <div className="card-body">
                <h5 className="card-title text-title">Tutorial Point for Computer Science</h5>
                <p className="card-text">UserName: hstucse <br />
                  Pass: #$8743resourcedev
                </p>
                <a href="https://www.coursera.org/" className="btn btn-primary btn-name">Tutorial Point</a>
              </div>
            </div>

          </div>

        </div>


      </div>



    </Dashboard >
  );
};

export default PaidResources;