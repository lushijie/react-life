import React from 'react';
import Child from './child'
import Utils from '../../utils'

export default class extends React.Component {
  state = {
    timer: 0,
    childColor: '#000000',
  }

  handleChangeChildColor = () => {
    this.setState({
      childColor: Utils.createColor()
    })
  }

  handleAddTimer = () => {
    this.setState({
      timer: this.state.timer + 1
    })
  }

  onChildChange = (childColor) => {
    console.log('child change:', childColor);
    this.setState({
      childColor,
    })
  }

  render() {
    return <div style={{ border : 'blue 1px solid', padding: '3px' }}>
      <p><button onClick={this.handleAddTimer}>addTimer</button></p>
      <p><button onClick={this.handleChangeChildColor}>changeChildColor</button></p>

      <p>timer:{this.state.timer}</p>
      <p>childColor:{this.state.childColor}</p>
      <Child color={this.state.childColor} onChange={this.onChildChange} />
    </div>
  }
}
