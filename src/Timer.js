import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toLocaleTimeString(),
      sec: props.value
    }
    console.log(this.state.date);
  }

  componentDidMount() {
    setInterval(() => {
      this.addSec();
      this.tick();
    }, 1000);
    console.log("Mounting");
  }

  componentWillUnmount() {
    clearInterval(this.addSec());
    clearInterval(this.tick());
    console.log("Unmounting");
  }

  addSec = () => {
    this.setState({ sec: this.state.sec + 1 })
  }

  tick = () => {
    this.setState({ date: new Date().toLocaleTimeString() });
  }

  render() {
    const { date, sec } = this.state;

    return (
      <React.Fragment>
        <p>Timer class component: {date}</p>
        <p>{sec}</p>
      </React.Fragment>
    );
  }
}

export default Timer;
