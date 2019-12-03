import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: props.uid,
    }
    console.log('This is demo11 ~');
  }

  static defaultProps = {
    uid: '',
    onChange: () => {}
  }

  static propTypes = {
    uid: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  // 子组件 setState 不会触发该声明周期
  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps', nextProps, nextState);
    if (nextProps.uid !== this.props.uid) {
      this.setState({
        uid: nextProps.uid
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState)
  }

  // 执行副作用
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
