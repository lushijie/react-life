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
      color: props.color,
    }
    console.log('This is demo22 ~');
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
    console.log('getDerivedStateFromProps', nextProps, prevState)
    const prevProps = prevState.prevProps || {};
    const color = prevProps.color !== nextProps.color ? nextProps.color : prevState.color;
    return {
      prevProps: nextProps,
      color
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState)
    if (prevState.color !== this.state.color) {
      this.props.onChange(this.state.color)
    }
  }

  handleChangeColor = () => {
    console.log('handleChangeColor')
    this.setState({
      color: `c_${Utils.createColor()}`,
    })
  }

  render() {
    return <div style={{ border : 'red 1px solid' }}>
      <button onClick={this.handleChangeColor}>changeColor</button>
      <p>color: {this.state.color}</p>
    </div>
  }
}
