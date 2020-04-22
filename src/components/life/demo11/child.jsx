import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../utils'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      color: props.color,
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

  // 子组件 setState 不会触发该声明周期
  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log('child componentWillReceiveProps', {
      nextProps,
      nextState
    });
    if (nextProps.color !== this.props.color) {
      this.setState({
        color: nextProps.color
      })
    }
  }

  handleChangeColor = () => {
    this.setState({
      color: `c_${Utils.createColor()}`,
    }, () => {
      this.props.onChange(this.state.color)
    })
  }

  handleAddCounter = () => {
    this.setState(preState => ({
      counter: preState.counter + 1
    }))
  }

  render() {
    return <div style={{ border : 'red 1px solid'}}>
      <p><button onClick={this.handleAddCounter}>addCounter：{this.state.counter}</button></p>
      <p><button onClick={this.handleChangeColor}>changeColor：{this.state.color}</button></p>
    </div>
  }
}
