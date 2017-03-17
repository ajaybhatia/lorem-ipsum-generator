import React, { Component } from 'react';

class LoremIpsum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  render() {
    return (
      <div className="well lorem">
        {this.props.value}
      </div>
    );
  }
}

export default LoremIpsum;
