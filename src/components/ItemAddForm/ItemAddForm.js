import React, { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../actions/actionCreators'
import API from '../../utils/API';
import { getAuthHeader } from '../../helpers/requestHelper';
import history from '../../history';

import 'bootstrap/dist/css/bootstrap.css';
import { UncontrolledAlert, Input } from 'reactstrap';
import './ItemAddForm.css'

const ItemAddForm = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState('');
  const [validationError, setValidationError] = useState('');
  
  const validateForm = () => taskName.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = getAuthHeader();

    API.post('tasks', {name: taskName}, config)
    .then(response => {
      const {data: {data: {id, attributes:{name}}}} = response;
      dispatch(addTask(id, name));
      setTaskName('');
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        history.push('/logout')
      } else if (error.response && error.response.status === 422) {
        setValidationError(error.response.data.errors.slice(-1)[0].detail);
      } else {
        console.log(error);
      }
    })
  }

  return (
    <Fragment>
      {validationError && 
        <UncontrolledAlert color="danger">
          <strong>{validationError}</strong>
        </UncontrolledAlert>                        
      }

      <form className="bottom-panel d-flex"
            onSubmit={handleSubmit}>

        <Input className="new-todo-label"
               value={taskName}
               onChange={(e) => setTaskName(e.target.value)}
               placeholder="What needs to be done?" />

        <button type="submit"
                className="btn btn-outline-secondary"
                disabled={!validateForm()}>Add</button>
      </form>
    </Fragment>
  );
}

export default ItemAddForm;
