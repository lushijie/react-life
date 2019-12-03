import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: props.uid,
    }
  }

  static defaultProps = {
    uid: '',
    onChange: () => {}
  }

  static propTypes = {
    uid: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  // TODO: 父级 state 或者传入的 prop 变化触发
  // TODO: 子级 state 变化触发
  // TODO: 异步：当外部多个属性在很短的时间间隔之内多次变化，就会导致componentWillReceiveProps被多次调用。
  //            这个调用并不会被合并，如果这次内容都会触发异步请求，那么可能会导致多个异步请求阻塞。
  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log('UNSAFE_componentWillReceiveProps', nextProps, nextState);
    if (nextProps.uid !== this.props.uid) {
      this.setState({
        uid: nextProps.uid
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, this.props, prevState, this.state)
    if (prevState.uid !== this.state.uid) {
      this.props.onChange(this.state.uid)
    }
  }

  handleChangeUid = () => {
    console.log('handleChangeUid')
    this.setState({
      uid: `c_${Math.random().toString().slice(-6)}`,
    })
  }

  render() {
    return <div style={{ border : 'red 1px solid'}}>
      <button onClick={this.handleChangeUid}>changeUid</button>
      <p>uid: {this.state.uid}</p>
    </div>
  }
}
