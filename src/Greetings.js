import React, { Component } from 'react';

class Greetings extends Component {
  render(){
    return(
      <span title={this.props.title}></span>
    );
  }
}

export default Greetings;
