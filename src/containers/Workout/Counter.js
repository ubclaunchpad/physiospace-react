import React, { Component } from "react";

class Counter extends Component {
  render() {
    let {targetCount, targetDegree, currentDegree, count, countable} = this.props;
    return (
      <div className="counter">
        <span>{count} / {targetCount}</span>
        <span style={{color: countable?"red":"green"}}> {currentDegree} / {targetDegree} </span>
      </div>
    );
  }
}
export default Counter;
