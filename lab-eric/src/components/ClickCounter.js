import React from 'react';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicks: this.state.clicks+1})
  }

  render() {
    return <div onClick={this.handleClick}>
            <p>Click Counter {this.state.clicks}</p>
          </div>
  }
}

export default ClickCounter;