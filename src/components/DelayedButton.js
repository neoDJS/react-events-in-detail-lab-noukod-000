// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
  handleClick = (e) => {
     setTimeout(this.props.onDelayedClick(e), this.props.delay);
  }

  Render(){
    return(
      <button onClick={this.handleClick}></button>
    );
  }
}
