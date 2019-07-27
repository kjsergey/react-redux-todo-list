import React, { useState } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { authenticated, unauthenticated } from '../../actions/actionCreators'
import 'bootstrap/dist/css/bootstrap.css';
import API from '../../utils/API';
import history from '../../history';
import { Alert, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

const LoginForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.error, shallowEqual);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const validateForm = () => email.length > 0 && password.length > 0;

  const handleSubmit = (e) => {
      e.preventDefault();
      API.post('users/login', {email: email, password: password})
      .then(response => {
        dispatch(authenticated());
        localStorage.setItem('jwt', response.data.jwt);
        history.push('/');
      })
      .catch(error => {
        dispatch(unauthenticated(error.response.data.errors.slice(-1)[0].detail));
      })
  }

  return (
    <div className="Login">              
      <form onSubmit={handleSubmit}>
        {authError !== undefined && 
          <FormGroup bssize="large">
              <Alert variant="danger">
                <strong>{authError}</strong>
              </Alert>                        
          </FormGroup>
        }
        <FormGroup controlId="email" bssize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
          />
        </FormGroup>
        <Button block bssize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
