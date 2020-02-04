import React, { Component } from 'react';
import './EmployeeInfo.css';

export default class EmployeeInfo extends Component {

  componentDidMount(){
    console.log('did mount ', this.props.name)
  }

  render() {
    // const { name } = this.props;

    return (
      <div className='info'>
        ksndkjdfhiefhj
      </div>
    );
  }

}
