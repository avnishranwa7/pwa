import { Button } from '@material-ui/core';
import './Homepage.css';
import PhoneSignIn from '../verify/verifyMobile';

function Home(){
    return (
        <div className='start'>
            <h1>Welcome</h1>
            <div className='main'>
                <div>
                    <Button variant="outlined" color="primary" type='submit'>
                        Login
                    </Button>
                </div>
                <div className='button2'>
                    <Button variant="outlined" color="primary" type='submit' href='/signup/step1'>
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home;