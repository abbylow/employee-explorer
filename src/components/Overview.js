import React from 'react';
import './Overview.css';
import { Link, useParams } from 'react-router-dom';
import { Home } from 'mdi-material-ui';
import EmployeeInfo from './EmployeeInfo';
import { Typography } from '@material-ui/core';

function Overview() {
  const { slug } = useParams();

  return (
    <div className='overview'>
      <div className='nav-bar'>
        <Link to="/">
          <Home fontSize='large' />
        </Link>
      </div>
      <div className='overview-title'>
        <Typography variant='h2'>Employee Overview </Typography>
      </div>
      <div className='overview-body'>
        <EmployeeInfo name={slug} />
      </div>
    </div>
  );
}

export default Overview;