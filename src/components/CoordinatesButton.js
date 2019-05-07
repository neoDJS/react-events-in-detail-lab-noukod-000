// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  handleClick = (e) => {
    const data = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(data);
  };

  render(){
    return(
      <button onClick={this.handleClick}></button>
    );
  }
}
