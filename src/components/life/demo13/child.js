import React from 'react';
import PropTypes from 'prop-types';

// TODO: 完全可控的组件
export default class extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log('This is demo13 ~');
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
    this.props.onChange(`c_${Math.random().toString().slice(-6)}`)
  }

  render() {
    return <div style={{ border : 'red 1px solid'}}>
      <button onClick={this.handleChangeUid}>changeUid</button>
      <p>uid: {this.props.uid}</p>
    </div>
  }
}
