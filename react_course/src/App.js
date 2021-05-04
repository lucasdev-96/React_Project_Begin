// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './Components/Navbar'
import Tasklist from './Components/Tasklist'
import titles from './data'



class App extends React.Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
    this.state = {
      id: 0,
     task: [],
    }
  }

  addTask(title) {
   this.setState((valorAnterior,_props) => ({
     id: valorAnterior.id +1,
     task: [...title, this.state.task]
   }))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
     <Tasklist titles={titles[0]} addTask={this.addTask} task={this.state.task}/>
         </div>
   </div>
  
    );
  }
}

export default App;
