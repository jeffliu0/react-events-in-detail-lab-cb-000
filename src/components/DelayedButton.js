<<<<<<< HEAD
import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    );
  }
}

export default DelayedButton
=======
// Code DelayedButton Component Here
// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{
  handleClick = event => {
  	event.persist()

  	setTimeout(function(){
  		this.props.onDelayedClick(event)
  	}, this.props.delay)
  }

  render(){
  	return(
  		<button onClick={this.handleClick}> Delay </button>
  	)
  }
}
>>>>>>> 3bdaf2439bd28841bd6edc9537e769a03745393e
