import React, { Component } from 'react'
import API from '../utils/API';

class TasksContainer extends Component {
  state = {
    tasks: []
  }
  
  getTasks() {
    API.get('/tasks')
    .then(response => {
      this.setState({tasks: response.data})
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getTasks()
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="taskInput" type="text" placeholder="Add a task" />
        </div>  	    
        <div className="listWrapper">
	        <ul className="taskList">
		        {this.state.tasks.map((task) => {
		          return(
		            <li className="task" key={task.id}>
			            <input className="taskCheckbox" type="checkbox" />              
			            <label className="taskLabel">{task.name}</label>
		            </li>
		          )       
		        })} 	    
	        </ul>
	      </div>
      </div>    
    )
  }
}

export default TasksContainer
