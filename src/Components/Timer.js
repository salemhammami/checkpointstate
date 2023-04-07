import React,{Component} from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      elapsedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        elapsedTime: this.state.elapsedTime + 1
      });
    }, 1000);
  }

  

  render() {
    return (
      <div>
        <h3 >Time : {this.state.elapsedTime} </h3>
      </div>
    );
  }
}

export default Timer;
