import React from 'react';
import Child from './child'
import Utils from '../../utils'

export default class extends React.Component {
  state = {
    counter: 0,
    childColor: '#000000',
    childKey: Math.random()
  }

  handleChangeChildColor = () => {
    this.setState({
      childKey: Math.random(),
      childColor: Utils.createColor()
    })
  }

  onChildChange = (childColor) => {
    console.log('from child change:', childColor);
    this.setState({
      childColor,
    })
  }

  handleAddCounter = () => {
    this.setState(preState => ({
      counter: preState.counter + 1
    }))
  }

  render() {
    return <div style={{ border : 'blue 1px solid', padding: '3px' }}>
      <p><button onClick={this.handleAddCounter}>addCounter：{this.state.counter}</button></p>
      <p><button onClick={this.handleChangeChildColor}>changeChildColor：{this.state.childColor}</button></p>
      <Child color={this.state.childColor} key={this.state.childKey} onChange={this.onChildChange} />
    </div>
  }
}
