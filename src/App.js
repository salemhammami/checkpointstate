import './App.css';
import React from 'react';
import User from './Components/User';
import Timer from './Components/Timer';


class App extends React.Component {

  constructor() {
    super();
    this.state={
      show:false,
      }
    }
  // Function to show and hide the user card
  handleShow=()=> this.setState({show : !this.state.show})
  


render() {
  return (<div className="App">
    <div>  <button onClick={this.handleShow}>{this.state.show ? "Hide" : "Show"}</button> </div> 
<div className='userCard'>{
  this.state.show && <User/>

}
</div >

  </div>)
}
}

export default App;
