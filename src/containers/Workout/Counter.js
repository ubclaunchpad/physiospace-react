import React, { Component } from "react";

class Counter extends Component {
  render() {
    let {targetCount, targetDegree, currentDegree, count, countable} = this.props;
    return (
      <div style={{fontWeight: 600, fontSize: "28px"}} className="counter">
        <span>{count} / {targetCount}</span>
        <span style={{color: countable?"red":"lime"}}> {currentDegree}° / {targetDegree}° deg </span>
      </div>
    );
  }
}
export default Counter;
