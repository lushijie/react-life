import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../utils'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: props.color,
    }
    console.log('This is demo11 ~');
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
  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps', nextProps, nextState);
    if (nextProps.color !== this.props.color) {
      this.setState({
        color: nextProps.color
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState)
  }

  // 执行副作用
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, this.props, prevState, this.state)
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
    return <div style={{ border : 'red 1px solid'}}>
      <button onClick={this.handleChangeColor}>changeColor</button>
      <p>color: {this.state.color}</p>
    </div>
  }
}
