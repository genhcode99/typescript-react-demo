import React, { Component } from 'react'
import Number from './Number'
import { Form, Input } from './Input'

interface IState {
  counter: number,
  value: string
}

export class App extends Component <{},IState>{
  state = {
    counter: 0,
    value: ""
  }
  //----------------------< render >--------------------
  render() {
    const { counter, value } = this.state;

    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={value} onChange={this.onChange}/>
        </Form>
        <Number count={counter}/>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  }

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
