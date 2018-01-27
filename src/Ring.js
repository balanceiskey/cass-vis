import React, { Component } from 'react';
import {RadialChart} from 'react-vis';
class Ring extends Component {
  render() {
    return (
      <RadialChart
        data={[ {angle: 3, radius: 10, innerRadius: 3},
                {angle: 3, radius: 10, innerRadius: 3},
                {angle: 3, label: 'text label test', subLabel: 'sublabel test', radius: 10, innerRadius: 3} ]}
        height={300}
        width={300}/>
    )
  }
}
export default Ring;
