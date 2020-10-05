import React from 'react';
import './App.css';

function App() {
  return(
    
  <div className='App'>    
  <a href='#' className='right logout'>Logout</a>
  <h1>Todo List</h1>  
      <div className='todo_input'>
      <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="What's on your mind?" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
  <div class="input-group-append">
    <button id="button-addon2" class="btn greenbutton" type="button" >+</button>
  </div>
</div>
    </div>
    </div> 
    );
    
}

export default App;
