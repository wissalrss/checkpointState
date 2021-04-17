import logo from './logo.svg';
import imgSrc from './imageInPublic.jpg';
import './App.css';
import React from "react";

class App extends React.Component{
  state = {
    fullName: "wissal Rouissi",
    bio: "loremipsum",
    imgSrc: imgSrc,
    profession: "développeuse front",
    shows: false,
    count: 25,
    date: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(
      () =>   this.setState({
        date: new Date()
      }),
      1000
    );
  }

 

  
  render() {
    const showProfile=()=>this.setState({shows: !this.state.shows})

  return (
    <div className="App">
       <button onClick={()=>showProfile()}>click me</button>
       {this.state.shows ? (
        <div className="profile">
         {this.state.fullName}<br/>
        {this.state.bio}<br/>
        <img src={imgSrc} alt="" /><br/>
        {this.state.profession}
       </div>
       ) : ("")}
<br/>
{this.state.count}

       <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

       <button id="start_stop" onClick={this.handleStartStop}>
                    Start/Stop
           </button>
      </div>
   );

  }
}

export default App;
