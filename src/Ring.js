import React, { Component } from 'react';
import { RadialChart, Hint } from 'react-vis';
//import Machine from './Machine.js';

export default class Ring extends Component {
  state = {
    value: false,
    nodes: [
      {angle: 2, radius: 10, innerRadius: 4},
      {angle: 2, radius: 10, innerRadius: 4},
      {angle: 2, radius: 10, innerRadius: 4}
    ]
  }
  render() {
    const {value} = this.state;
    return (
      <RadialChart
        data={this.state.nodes}
        height={300}
        width={300}
        onValueMouseOver={v => this.setState({value: v})}
        onSeriesMouseOut={v => this.setState({value: false})}
        >
      {value && <Hint value={value}/>}
      </RadialChart>
    )
  }
}
