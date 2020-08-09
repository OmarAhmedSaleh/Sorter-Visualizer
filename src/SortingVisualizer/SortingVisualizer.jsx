import React from 'react';
import './SortingVisualizer.css';
import {getAnimations} from '../SortingAlgorithms/sortingAlgorithms.js';


// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 0.8;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 200;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const CHANGE_COLOR = 0;
// const CHANGE_HIGHT = 1;
// const PRIMARY = 1;
const SECONDARY = 0;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          array: [],
          inStack: 0
        };
      }
      resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
          array.push(randomIntFromInterval(10, 800));
        }
        this.setState({array});
      }
      componentDidMount() {
        this.resetArray();
      }

      sort(type) {
        this.setState({inStack: 1});
        let copy = this.state.array.slice();
        const animations = getAnimations(copy, type);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          if(animations[i]['action'] === CHANGE_COLOR){
            const [barOneIdx, barTwoIdx] = animations[i]['ids'];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = animations[i]['color'] === SECONDARY ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const barOneIdx = animations[i]['firstIdx'];
              const newHeight = animations[i]['hight'];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
        setTimeout(() => {
            this.setState({inStack: 0});
            this.setState({array: copy});
        }, (animations.length + 1 )* ANIMATION_SPEED_MS);
      }

      render() {
        const array = this.state.array;
    
        return (
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                }}></div>
            ))}
            <div>
                <button disabled = {this.state.inStack > 0} onClick={() => this.resetArray()}>Generate New Array</button>
                <button disabled = {this.state.inStack > 0} onClick={() => this.sort(0)}>Merge Sort</button>
                <button disabled = {this.state.inStack > 0} onClick={() => this.sort(1)}>Quick Sort</button>
                <button disabled = {this.state.inStack > 0} onClick={() => this.sort(2)}>Bubble Sort</button>
                <button disabled = {this.state.inStack > 0} onClick={() => this.sort(3)}>Insertion Sort</button>
            </div>
          </div>
        );
    }
}
// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }