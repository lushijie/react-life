import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../utils'

// TODO: https://juejin.im/post/5c3ad49be51d45521053fde0
// TODO: 完全不可控组件
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      color: props.color
    }
  }

  static defaultProps = {
    color: '',
    onChange: () => {}
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  handleChangeColor = () => {
    const newChildColor = `c_${Utils.createColor()}`;
    this.setState({
      color: newChildColor
    })
    this.props.onChange(newChildColor)
  }

  handleAddCounter = () => {
    this.setState(preState => ({
      counter: preState.counter + 1
    }))
  }

  render() {
    const { counter, color } = this.state;
    return <div style={{ border : 'red 1px solid'}}>
      <p><button onClick={this.handleAddCounter}>changeCounter：{ counter }</button></p>
      <p><button onClick={this.handleChangeColor}>changeColor：{ color }</button></p>
    </div>
  }
}
