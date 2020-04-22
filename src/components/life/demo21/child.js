import React from 'react'
import PropTypes from 'prop-types'
import Utils from '../../utils'

// TODO: https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops
// TODO: https://juejin.im/post/5c3ad49be51d45521053fde0
// TODO: http://www.ayqy.net/blog/react-async-rendering/
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

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps', {
      nextProps,
      prevState
    })
    const prevProps = prevState.prevProps || {};
    const color = prevProps.color !== nextProps.color ? nextProps.color : prevState.color;
    return {
      prevProps: nextProps,
      color
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', {
      prevProps,
      prevState
    })
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
