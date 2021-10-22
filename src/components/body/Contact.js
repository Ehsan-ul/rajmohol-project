import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
} from 'reactstrap';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      agree: '',
      conatct: '',
      message: '',
    };
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <br />
              <h3>Send your Feedback</h3>
              <br />
            </div>

            <div className='col-12'>
              <Form>
                <FormGroup row>
                  <Label htmlFor='firstName' md={2}>
                    First Name
                  </Label>
                  <Col md={10}>
                    <Input
                      id='firstName'
                      type='text'
                      name='firstName'
                      placeholder='First Name'
                      value={this.state.firstName}
                    ></Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={2} htmlFor='lastName'>
                    Last Name
                  </Label>
                  <Col md={10}>
                    <Input
                      id='lastName'
                      type='text'
                      name='lastName'
                      placeholder='Last Name'
                      value={this.state.lastName}
                    ></Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={2} htmlFor='phone'>
                    Phone
                  </Label>
                  <Col md={10}>
                    <Input
                      id='phone'
                      type='text'
                      name='phone'
                      placeholder='Phone Number'
                      value={this.state.phone}
                    ></Input>
                  </Col>
                </FormGroup>
                
                <FormGroup row>
                  <Label md={2} htmlFor='email'>
                    Email
                  </Label>
                  <Col md={10}>
                    <Input
                      id='email'
                      type='email'
                      name='email'
                      placeholder='Email'
                      value={this.state.email}
                    ></Input>
                  </Col>
                </FormGroup>

              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
