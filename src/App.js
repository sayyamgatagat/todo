import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, settask] = useState(['Sample Task 1','Sample Task 2']);
  const [newtask, setnew]= useState('');
 
  const taskup = (event) => {
    settask([...tasks,newtask]);
    setnew('');
  }
  
  console.log(tasks);
  return(
  <div className='App'>    
  <a href='#' className='right logout'>Logout</a>
  <h1>Todo List</h1>  
      <div className='todo_input'>
      <form class='inputform' onSubmit = {event => (event.preventDefault()) }>
      <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="What's on your mind?" aria-label="Recipient's username" aria-describedby="button-addon2" value={newtask} onChange={event => setnew(event.target.value)}/>
  <div class="input-group-append">
    <button id="button-addon2" class="btn greenbutton" type='submit' onClick={taskup} >+</button>
  </div>
</div>
</form>
</div>
  <ul>
    {
      tasks.map(item =>(
        <div class="list-div">
          <li className='listitem'>{item}</li>
        </div>
      ))
    }
  </ul>
  </div>
  )
};
export default App;
