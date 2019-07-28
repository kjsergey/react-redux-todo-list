import React, { useState } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { authenticated, unauthenticated } from '../../actions/actionCreators'
import API from '../../utils/API';
import history from '../../history';
import 'bootstrap/dist/css/bootstrap.css';
import './RegistrationForm.css'
import { Alert, Button, FormGroup, Input, Label } from 'reactstrap';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.error, shallowEqual);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
  const validateForm = () => email.length > 0 && password.length > 0 && passwordConfirmation;

  const handleSubmit = (e) => {
      e.preventDefault();
      API.post('users/registration', {email: email, password: password, password_confirmation: passwordConfirmation})
      .then(response => {
        localStorage.setItem('jwt', response.data.meta.token);
        dispatch(authenticated());
        setPassword('');
        setPasswordConfirmation('');
        history.push('/');
      })
      .catch(error => {
        dispatch(unauthenticated(error.response.data.errors.slice(-1)[0].detail));
      })
  }

  return (
    <div className="RegistrationForm">              
      <form onSubmit={handleSubmit}>
        {authError !== undefined && 
          <FormGroup bssize="large">
              <Alert color="danger">
                <strong>{authError}</strong>
              </Alert>                        
          </FormGroup>
        }
        <FormGroup controlid="email" bssize="large">
          <Label>Email</Label>
          <Input
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlid="password" bssize="large">
          <Label>Password</Label>
          <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="true"
          />
        </FormGroup>
        <FormGroup controlid="password" bssize="large">
          <Label>Password confirmation</Label>
          <Input
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
              autoComplete="true"
          />
        </FormGroup>
        <Button block bssize="large" disabled={!validateForm()} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default RegistrationForm;
