import React, {useState} from 'react';
import PhoneSignIn from '../verify/verifyMobile';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import db from '../../firebase';

function SignUp(props){
    console.log(props.location.state.phone);
    function handleForm(event){
        event.preventDefault();
        let input = event.target.elements.gender.value;
        if(input!=='M' & input!=='F'){
            alert('Please choose appropriate gender');
        }
        let phonenumber = event.target.elements.mobile.value;
        if(phonenumber.length<10){
            alert('Please enter correct phone number');
        }
        let name = event.target.elements.name.value;
        let gender = event.target.elements.gender.value;
        let mobile = props.location.state.phone;
        let user = {name: name, gender:gender, mobile: mobile};
        db.collection('users').add(user);
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <FormControl>
                    <Button variant="outlined" color="secondary" disabled>Step 2</Button>
                </FormControl>
                <br/>
                <br/>
                <FormControl>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input id="name" required/>
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel htmlFor="gender">Gender (M/F)</InputLabel>
                    <Input id="gender" required />
                </FormControl>
                <br/>
                <br/>
                <br/>
                <Button variant="outlined" color="primary" type='submit'>
                    Submit
                </Button>
            </form> 
        </div>
    )
}


export default SignUp;