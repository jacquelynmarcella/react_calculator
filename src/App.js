import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      fieldOne: 0,
      fieldTwo: 0,
    }
    this.newTotal = this.newTotal.bind(this);
  }

  newTotal(event){
    let newValue = parseFloat(event.target.value); 
    if(!newValue) {
      newValue = 0;
    }
    const currentName = event.target.name;
    this.setState({
      [currentName]: newValue
    });
  }

  render() {
    return (
      <div className="add">
        <input type="text" name="fieldOne" onChange={(event)=>this.newTotal(event)}/>
        <span className="addsign">+</span>
        <input type="text" name="fieldTwo" onChange={(event)=>this.newTotal(event)}/>
        <hr />
        <h3>{this.state.fieldOne + this.state.fieldTwo}</h3>
      </div>
    );
  }
}

export default App;
