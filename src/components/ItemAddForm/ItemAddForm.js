import React, { useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTask } from '../../actions/actionCreators'

import 'bootstrap/dist/css/bootstrap.css';
import { UncontrolledAlert, Input } from 'reactstrap';
import './ItemAddForm.css'

const ItemAddForm = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState('');
  const validationError= useSelector(state => state.form.validationError);

  
  const validateForm = () => taskName.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(taskName));
    setTaskName('');
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
