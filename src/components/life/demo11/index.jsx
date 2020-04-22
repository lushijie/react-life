import React from 'react';
import Child from './child'
import Utils from '../../utils'

export default class extends React.Component {
  state = {
    counter: 0,
    childColor: '#000000',
  }

  handleChangeChildColor = () => {
    this.setState({
      childColor: Utils.createColor()
    })
  }

  handleAddCounter = () => {
    this.setState(preState => ({
      counter: preState.counter + 1
    }))
  }

  onChildChange = (childColor) => {
    console.log('from child change:', childColor);
    this.setState({
      childColor,
    })
  }

  render() {
    return <div style={{ border : 'blue 1px solid', padding: '3px' }}>
      <p><button onClick={this.handleAddCounter}>addCounter：{this.state.counter}</button></p>
      <p><button onClick={this.handleChangeChildColor}>changeChildColor：{this.state.childColor}</button></p>
      <Child color={this.state.childColor} onChange={this.onChildChange} />
    </div>
  }
}
