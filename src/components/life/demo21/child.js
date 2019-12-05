import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../utils'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: props.color,
      ownUpdate: false
    }
    console.log('This is demo21 ~');
  }

  static defaultProps = {
    color: '',
    onChange: () => {}
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  // TODO: 父级 state 或者传入的 prop 变化触发
  // TODO: 子级 state 变化触发
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps', nextProps, prevState)
    if (prevState.ownUpdate) {
      return {
        color: prevState.color,
        ownUpdate: false
      }
    }
    if (nextProps.color !== prevState.color) {
      return {
        color: nextProps.color
      }
    }
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState, this.state)
    if (prevState.color !== this.state.color) {
      this.props.onChange(this.state.color)
    }
  }

  handleChangeColor = () => {
    console.log('handleChangeColor')
    this.setState({
      color: `c_${Utils.createColor()}`,
      ownUpdate: true
    })
  }

  render() {
    return <div style={{ border : 'red 1px solid'}}>
      <button onClick={this.handleChangeColor}>changeColor</button>
      <p>color: {this.state.color}</p>
    </div>
  }
}
