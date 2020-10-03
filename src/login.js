import React from 'react';
import './App.css';

function Login(){
    return (
    <div class="login-page">
      <h1>ToDo App</h1>
      <form>
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Id" required></input>
  </div>
  <button type="submit" class="btn btn-outline-success">Next</button>
</form>
      
    </div>
    );
}
export default Login ;