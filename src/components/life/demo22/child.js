import React from 'react'
import PropTypes from 'prop-types'

// TODO: https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops
// TODO: https://juejin.im/post/5c3ad49be51d45521053fde0
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: props.uid || '0',
    }
    console.log('This is demo22 ~');
  }

  static defaultProps = {
    uid: '',
    onChange: () => {}
  }

  static propTypes = {
    uid: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps', nextProps, prevState)
    const prevProps = prevState.prevProps || {};
    const uid = prevProps.uid !== nextProps.uid ? nextProps.uid : prevState.uid;
    return {
      prevProps: nextProps,
      uid
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState)
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
    return <div style={{ border : 'red 1px solid' }}>
      <button onClick={this.handleChangeUid}>changeUid</button>
      <p>uid: {this.state.uid}</p>
    </div>
  }
}
