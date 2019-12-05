import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../utils'

// TODO: 完全可控的组件
export default class extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log('This is demo13 ~');
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
    this.props.onChange(`c_${Utils.createColor()}`)
  }

  render() {
    return <div style={{ border : 'red 1px solid'}}>
      <button onClick={this.handleChangeColor}>changeColor</button>
      <p>color: {this.props.color}</p>
    </div>
  }
}
