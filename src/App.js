import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './asset/cat1.json'
import * as animationData2 from './asset/cat1.json'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ catArray:[0 ,1 ,2 ,3], index:1 };
  }

  handleLeft =()=> {
    const {index} = this.state;
    if(index === 3){
      const right = document.getElementById('right');
      right.style.visibility = "visible";
      this.setState({index: index-1});
    }else if(index-1 > 0 ){
      this.setState({index: index-1});
    }else{
      this.setState({index: index-1});
      const left = document.getElementById('left');
      left.style.visibility = "hidden";
    }
  }

  handleRight =()=> {
    const {catArray,index} = this.state;
    if(index === 0){
      const left = document.getElementById('left');
      left.style.visibility = "visible";
      this.setState({index: index+1});
    }else if(index +1 < catArray.length-1){
      this.setState({index: index+1});
    }else{
      this.setState({index: index+1});
      const right = document.getElementById('right');
      right.style.visibility = "hidden";
    }
  }



  render() {
    const {catArray,index} = this.state;
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData2.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  return (
    <div className="App">
      <label style={{fontSize:"4vh",color:"white"}}>cat animation</label>
      <div className="animation">
        <div id="left" className="arrow" style={{transform:"rotate(-135deg)"}} onClick={this.handleLeft}></div>
        <div className="container">
          <label>{catArray[index]}</label>
          <Lottie options={defaultOptions}
              height="32vh"
              width="32vh"
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
        </div>
        <div id="right" className="arrow" style={{transform:"rotate(45deg)"}} onClick={this.handleRight}></div>
      </div>
    </div>
  );
  }
}

export default App;
