import './App.css';
 import User from './User';
 import React from 'react';

 class App extends React.Component{
  state = {
    editForm: false
  }
  render() {
    return (
      <div className="App">
        <header>
            <div class="status-col">
               <label> Name </label>
            </div>
            <div class="progress-col">
		           <label> Email </label>
		        </div>
            <div class="progress-col">
		           <label> Phrase </label>
		        </div>
	      </header>
        <main>
            <ul className="userList">
              <User name="Sae" adress="Kattie Turnpike" phrase="Centralized empowering task-force"/>
            </ul>
        </main>
      </div>
    )
  } 
}

export default App;
