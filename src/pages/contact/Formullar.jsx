import {Form, Input, TextArea, Button} from 'semantic-ui-react';
import './Formullar.css';
import React from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';



function Formullar() {
const SERVICE_ID = "service_vc1wzgj";
const TEMPLATE_ID = "template_324euet";
const USER_ID = "Esnea9gx1EpDOJ9GE";




  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
    return (
        <div className="Formullar">
          <Form onSubmit={handleOnSubmit}>
            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              name='from_name'
              placeholder='Email…'
              required
              icon='mail'
              iconPosition='left'
            />
            <Form.Field
              id='form-input-control-last-name'
              control={Input}
              label='Name'
              name='user_name'
              placeholder='Name…'
              required
              icon='user circle'
              iconPosition='left'
            />
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Message'
              name='message'
              placeholder='Message…'
              required
            />
            <Button type='submit' id="button">Submit</Button>
          </Form>
        </div>
      );
    }
  
    


export default Formullar;
