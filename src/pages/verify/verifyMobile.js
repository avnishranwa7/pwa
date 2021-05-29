import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FormControl, InputLabel, Input, Button} from '@material-ui/core';
import firebase from 'firebase';
import { Container, Segment } from "semantic-ui-react";

function PhoneSignIn() {
    const [phone, setPhone] = useState('');
    const handleClick = (event) => {
      event.preventDefault();
      let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");
      let number = event.target.elements.mobile.value;
      firebase
        .auth()
        .signInWithPhoneNumber(number, recaptcha)
        .then((e) => {
          let code = prompt("Enter OTP");
          if (code == null) {
            return;
          }
          e.confirm(code).then((res) => {
            alert('Verification Sucessful!!');
            setPhone(number);
          });
        })
        .catch(() => {
          alert('OTP not sent');
        });
  };
  return (
    <Container>
      <Segment>
        <div id="recaptcha-container"></div>
        <div style={{justifyContent: 'center'}}>
          <FormControl>
            <Button variant="outlined" color="secondary" disabled>Step 1</Button>
          </FormControl>
          <br/>
          <br/>
          <div>
            <form onSubmit={handleClick}>
              <FormControl>
                <InputLabel htmlFor='mobile'>Phone Number</InputLabel>
                <Input id='mobile' required />
                <br/>
                <Button variant="outlined" color="primary" type='submit'>
                  Verify Phone Number
                </Button>
              </FormControl>
            </form>
            <br/>
            <br/>
            <FormControl>
              <Button variant="outlined" color="primary" ><Link to={{pathname: '/signup/step2', state:{phone}
            }} color='inherit' style={{ textDecoration: 'none' }} >Next Step</Link></Button>
            </FormControl>
          </div>
        </div>
      </Segment>
    </Container>
  );
}

export default PhoneSignIn;