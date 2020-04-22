import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../utils'

// TODO: 完全可控的组件
export default class extends React.Component {
  state = {
    counter: 0
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
    this.props.onChange(`c_${Utils.createColor()}`)
  }

  handleAddCounter = () => {
    this.setState(preState => ({
      counter: preState.counter + 1
    }))
  }

  render() {
    const { counter } = this.state;
    const { color } = this.props;
    return <div style={{ border : 'red 1px solid'}}>
      <p><button onClick={this.handleAddCounter}>changeCounter：{ counter }</button></p>
      <p><button onClick={this.handleChangeColor}>changeColor：{ color }</button></p>
    </div>
  }
}
