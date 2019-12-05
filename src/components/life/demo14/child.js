import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../utils'

// TODO: https://juejin.im/post/5c3ad49be51d45521053fde0
// TODO: 完全不可控组件
export default class extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      color: props.color
    }
    console.log('This is demo14 ~');
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
    console.log('handleChangeColor')
    const newChildColor = `c_${Utils.createColor()}`;
    this.setState({
      color: newChildColor
    })
    this.props.onChange(newChildColor)
  }

  render() {
    return <div style={{ border : 'red 1px solid'}}>
      <button onClick={this.handleChangeColor}>changeColor</button>
      <p>color: {this.state.color}</p>
    </div>
  }
}
