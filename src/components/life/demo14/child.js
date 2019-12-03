import React from 'react';
import PropTypes from 'prop-types';

// TODO: https://juejin.im/post/5c3ad49be51d45521053fde0
// TODO: 完全不可控组件
export default class extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      uid: props.uid
    }
    console.log('This is demo14 ~');
  }
  static defaultProps = {
    uid: '',
    onChange: () => {}
  }

  static propTypes = {
    uid: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  handleChangeUid = () => {
    console.log('handleChangeUid')
    const newChildUid = `c_${Math.random().toString().slice(-6)}`;
    this.setState({
      uid: newChildUid
    })
    this.props.onChange(newChildUid)
  }

  render() {
    return <div style={{ border : 'red 1px solid'}}>
      <button onClick={this.handleChangeUid}>changeUid</button>
      <p>uid: {this.state.uid}</p>
    </div>
  }
}
