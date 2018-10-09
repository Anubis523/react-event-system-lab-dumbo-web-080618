// Code EyesOnMe Component Here
import React, { Component } from 'react'
export default class EyesOnMe extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  focusButton = () => console.log('Good!')
  offFocus = () => console.log('Hey! Eyes on me!')


  render(){
    return (
      <React.Fragment>
        <button
          onBlur ={this.offFocus}
          onFocus={this.focusButton}>
        EyesOnMe  
        </button>
      </React.Fragment>
    )
  }
}