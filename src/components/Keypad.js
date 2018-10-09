// Code Keypad Component Here
import React , { Component} from 'react'
export default class KeyPad extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  simulate = () => console.log('Entering password...')
  render(){
    return (
      <React.Fragment>
        <input type="password"
        onKeyUp={this.simulate}></input>
      </React.Fragment>
    )
  }
}