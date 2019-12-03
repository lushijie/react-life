import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: props.uid,
      ownUpdate: false
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
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps', nextProps, prevState)
    if (prevState.ownUpdate) {
      return {
        uid: prevState.uid,
        ownUpdate: false
      }
    }
    if (nextProps.uid !== prevState.uid) {
      return {
        uid: nextProps.uid
      }
    }
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState, this.state)
    if (prevState.uid !== this.state.uid) {
      this.props.onChange(this.state.uid)
    }
  }

  handleChangeUid = () => {
    console.log('handleChangeUid')
    this.setState({
      uid: `c_${Math.random().toString().slice(-6)}`,
      ownUpdate: true
    })
  }

  render() {
    return <div style={{ border : 'red 1px solid'}}>
      <button onClick={this.handleChangeUid}>changeUid</button>
      <p>uid: {this.state.uid}</p>
    </div>
  }
}
