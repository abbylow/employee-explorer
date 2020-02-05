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
    const self = { ...result[this.props.name] };
    delete result[this.props.name];
    this.setState({ self, subordinates: result });
  }

  render() {
    const { name } = this.props;
    const { self, subordinates } = this.state;

    return (
      <div className='info'>
        <div className='self-position'>
          <Typography variant='h5'>{name}</Typography>
          <Typography variant='subtitle1'>{self.position}</Typography>
        </div>
        <div className='subtitle'>
          <Typography variant='h6'>{Object.values(subordinates).length > 0 ? `Subordinates of employee ${name}: ` : 'No subordinate'}</Typography>
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
