import React from 'react';
import './App.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toLocaleTimeString(),
      sec: 0
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
    this.setState({sec: this.state.sec + 1})
  }

  tick = () => {
    this.setState({date: new Date().toLocaleTimeString()});
  }

  render () {
    const {date, sec} = this.state;
    
    return (
      <React.Fragment>
        <div className="App">
        <p>{date}</p>
         <p>{sec}</p>
        </div>
      </React.Fragment>  
      );
  }
}

export default Timer;
