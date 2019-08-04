import React, { useState } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { registration } from '../../actions/actionCreators'

import 'bootstrap/dist/css/bootstrap.css';
import './RegistrationForm.css'
import { UncontrolledAlert, Button, FormGroup, Input, Label } from 'reactstrap';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.error, shallowEqual);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
  const validateForm = () => email.length > 0 && password.length > 0 && passwordConfirmation;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registration({email: email, password: password, password_confirmation: passwordConfirmation}));
    setPassword('');
    setPasswordConfirmation('');
  }

  return (
    <div className="RegistrationForm">              
      <form onSubmit={handleSubmit}>
        {authError !== undefined && 
          <FormGroup bssize="large">
              <UncontrolledAlert color="danger">
                <strong>{authError}</strong>
              </UncontrolledAlert>                        
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
