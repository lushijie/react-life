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

  // 执行副作用
  componentDidUpdate(prevProps, prevState) {
    console.log('child componentDidUpdate', {
      prevProps,
      props: this.props,
      prevState,
      state: this.state
    })
    if (prevProps.color !== this.props.color) {
      this.setState({
        color: this.props.color,
      })
    }
    if (prevState.color !== this.state.color) {
      this.props.onChange(this.state.color)
    }
  }

  handleChangeColor = () => {
    this.setState({
      color: `c_${Utils.createColor()}`,
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
