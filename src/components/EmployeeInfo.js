import React, { Component } from 'react';
import './EmployeeInfo.css';
import { getWholeTree } from '../services/getEmployee';
import { Typography } from '@material-ui/core';

export default class EmployeeInfo extends Component {

  state = {
    self: {},
    subordinates: {},
  }

  componentDidMount() {
    this.loadEmployee();
  }

  loadEmployee = async () => {
    const result = await getWholeTree(this.props.name);
    this.setState({ self: result[this.props.name] });
    delete result[this.props.name]
    this.setState({ subordinates: result });
  }

  render() {
    const { name } = this.props;
    const { self, subordinates } = this.state;

    return (
      <div className='info'>
        <div className='self-position'>
          <Typography variant='h5'>{`Position of ${name}: ${self.position}`}</Typography>
        </div>
        {
          Object.values(subordinates).map(sub => (
            <div className='sub-name' key={sub.name}>
            <Typography variant='h6'>
              {sub.name}
            </Typography>
            <Typography variant='overline'>
              {sub.position}
            </Typography>
            </div>
          ))
        }
      </div>
    );
  }

}
