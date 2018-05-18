<<<<<<< HEAD

import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coords</button>
    );
  }
}

export default CoordinatesButton
=======
// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{

  handleClick=event=>{
    this.props.onReceiveCoordinates = ()=>{
      return [event.clientX, event.clientY]
    }
  }

  render(){
    return(
      <button onClick={this.handleClick}> Coordinates </button>
    )
  }
}
>>>>>>> 3bdaf2439bd28841bd6edc9537e769a03745393e
