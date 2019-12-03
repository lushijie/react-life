import React from 'react';
import Child from './child'

export default class extends React.Component {
  state = {
    timer: 0,
    childUid: '0',
    childKey: Math.random()
  }

  handleChangeChildUid = () => {
    this.setState({
      childKey: Math.random(),
      childUid: Math.random().toString().slice(-6)
    })
  }

  handleAddTimer = () => {
    this.setState({
      timer: this.state.timer + 1
    })
  }

  onChildChange = (childUid) => {
    console.log('child_change:', childUid);
    this.setState({
      childUid,
    })
  }

  render() {
    return <div style={{ border : 'blue 1px solid', padding: '3px' }}>
      <p><button onClick={this.handleAddTimer}>addTimer</button></p>
      <p><button onClick={this.handleChangeChildUid}>changeChildUid</button></p>

      <p>timer:{this.state.timer}</p>
      <p>childUid:{this.state.childUid}</p>
      <Child uid={this.state.childUid} key={this.state.childKey} onChange={this.onChildChange}  />
    </div>
  }
}
