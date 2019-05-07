// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  handleClick = (e) => {
    data = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(data);
  }

  Render(){
    return(
      <button onClick={this.handleClick}></button>
    );
  }
}
