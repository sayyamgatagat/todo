import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import './App.css';

function App() {
  var clicked = false;
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
      <div className='box'>
      {tasks.map(item =>(
        <div className='listitem' >      
          <li><span onClick={(e)=>{clicked = !clicked; 
            if(clicked)
              e.target.style.textDecoration = 'line-through';
            else
            e.target.style.textDecoration = 'none';
          }}>{item}</span><i class="far fa-trash-alt"></i> </li>
        </div>
        ))}
      </div>
  </ul>
  </div>
  )
};
export default App;
