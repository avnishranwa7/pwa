import SignUp from './pages/SignUp/signup';
import './App.css';
import Home from './pages/Homepage/Homepage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PhoneSignIn from './pages/verify/verifyMobile';

function App() {

  return (
    <div className='signin'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signup/step2' component={SignUp} />
          <Route path='/signup/step1' component={PhoneSignIn} />
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
