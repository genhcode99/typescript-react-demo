import React, { Component } from "react"

interface IState {
  counter: number;
}

export class App extends Component <{},IState>{
  state = {
    counter: 0
  }
  //----------------------< render >--------------------
  render() {
    const { counter } = this.state;

    return (
      <div>
        { counter } 
        <button onClick={this.add}>Add</button>
      </div>
    )
  }


  add = ():void => {
    this.setState((prev)=> {
      return {
        counter : prev.counter + 1
      }
    })
  }
}

export default App
