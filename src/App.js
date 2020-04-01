import React from 'react';
import Lottie from 'react-lottie';
import cat0 from './asset/cat1.json'
import cat1 from './asset/cat2.json'
import cat2 from './asset/cat3.json'
import cat3 from './asset/cat4.json'
import cat4 from './asset/cat5.json'
import cat5 from './asset/cat6.json'
import cat6 from './asset/cat7.json'
import { FaPlay } from "react-icons/fa";
import { FaStopCircle } from "react-icons/fa";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    const imageArray = [cat0 , cat1 , cat2 , cat3, cat4 ,cat5 ,cat6];
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet'
      }
    };
    this.state ={ index:1, imageArray:imageArray, defaultOptions:defaultOptions, isPaused: false , speed:1};
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
    const {imageArray,index} = this.state;
    if(index === 0){
      const left = document.getElementById('left');
      left.style.visibility = "visible";
      this.setState({index: index+1});
    }else if(index +1 < imageArray.length-1){
      this.setState({index: index+1});
    }else{
      this.setState({index: index+1});
      const right = document.getElementById('right');
      right.style.visibility = "hidden";
    }
  }

  onSliderChange = (value) => {
    console.log(value);
    this.setState({speed : value});
  }


  render() {
  const {speed, index, defaultOptions, imageArray, isPaused} = this.state;
  let defaultOption_index = defaultOptions;
  const sliderVisible = isPaused ? "hidden":"visible";
  defaultOption_index.animationData = imageArray[index];
  return (
    <div className="App">
      <label style={{fontSize:"4vh",color:"white"}}>cat animation</label>
      <div className="animation">
        <div id="left" className="arrow" style={{transform:"rotate(-135deg)"}} onClick={this.handleLeft}></div>
        <div className="container">
          <label>cat image:[{index}]</label>
          <Lottie 
              speed={speed}
              options={defaultOption_index}
              isClickToPauseDisabled={true}
              isPaused={isPaused}
              height="32vh"
              width="32vh"
          />
        </div>
        <div id="right" className="arrow" style={{transform:"rotate(45deg)"}} onClick={this.handleRight}></div>
      </div>
      <div className="controllPanel">
        <button className="controllButton"  onClick={() => this.setState({isPaused: false })}><FaPlay/></button>
        <button className="controllButton"  onClick={() => this.setState({isPaused: true})}><FaStopCircle/></button>
      </div>
      <div className="wrapperStyle" style={{visibility :sliderVisible}}>
        <Slider min={1} max={15} defaultValue={1} onChange={this.onSliderChange}  />
      </div>
    </div>
  );
  }
}

export default App;
