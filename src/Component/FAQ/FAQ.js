import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
// import { AccordionButton, Card, useAccordionButton } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import { render } from 'react-dom';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="container">
      <h3 className="text-center text-color-header"><i className="icon-color" class="fas fa-chalkboard-teacher"></i>  Frequently Asked Question</h3>
      <div className="row ">
        <div className="col-md-3"></div>
        <div className="col-md-6 shadow m-2 p-4">

          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How can i can create class post here ? </Accordion.Header>
              <Accordion.Body>
                At first make an account and go through dashboard then get add post option.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Which types of information we will get ?</Accordion.Header>
              <Accordion.Body>
                Here , you will see class , exam and result of Department of CSE , HSTU.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>How can i get my result? </Accordion.Header>
              <Accordion.Body>
                Please search with your valid Student ID
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-md-3"></div>
      </div>

    </div>
  );
};

export default FAQ;