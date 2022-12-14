import './App.css';
import React, {Component} from 'react';
import { Cardlist } from './components/card-lists/card-list.component';
class App extends  Component{
  constructor(){
    super();
    this.state={
      monsters :[]
    }

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=> Response.json())
    .then(users => this.setState({monsters: users}))
  }
  render(){
    return(
      <div className='App'>
        <Cardlist monsters={this.state.monsters} />

      </div>
    );
  }
}
export default App;




