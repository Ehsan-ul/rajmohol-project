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
      conatctType: '',
      message: '',
    };

    this.inputHandller = this.inputHandller.bind(this);
    this.submitHandller = this.submitHandller.bind(this);
  }

  inputHandller = (event) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  submitHandller = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    document.title = 'Contact';

    return (
      <div>
        <div className='container'>
          <div className='row text-left mt-3'>
            <div className='col-12 col-md-8'>
              <br />
              <h3>Send your Feedback</h3>
              <br />
            </div>

            <div className='col-12 col-md-8'>
              <Form onSubmit={this.submitHandller}>
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
                      onChange={this.inputHandller}
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
                      onChange={this.inputHandller}
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
                      onChange={this.inputHandller}
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
                      onChange={this.inputHandller}
                    ></Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={{ size: 6, offset: 2 }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type='checkbox'
                          name='agree'
                          checked={this.state.agree}
                          onChange={this.inputHandller}
                        ></Input>
                        <strong>May we contact you?</strong>
                      </Label>
                    </FormGroup>
                  </Col>

                  <Col md={{ size: 3, offset: 1 }}>
                    <Input
                      type='select'
                      name='conatctType'
                      value={this.state.conatctType}
                      onChange={this.inputHandller}
                    >
                      <option>Email</option>
                      <option>Moibile</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor='message' md={2}>
                    Your Feedback
                  </Label>
                  <Col md={10}>
                    <Input
                      id='message'
                      type='textarea'
                      name='message'
                      value={this.state.message}
                      onChange={this.inputHandller}
                    ></Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type='submit' color='primary' block>
                      Send Feedback
                    </Button>
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
