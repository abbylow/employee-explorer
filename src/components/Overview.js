import React, { useState } from 'react';
import './Overview.css';
import { Link, useParams } from 'react-router-dom';
import { Home } from 'mdi-material-ui';
import EmployeeInfo from './EmployeeInfo';
import { Typography } from '@material-ui/core';

function Overview() {
  const { slug } = useParams();
  const [shownList, setShownList] = useState(new Set());
  // if use an array to contain the shownList and setShwonList here, it will show a warning about update the state of an unmounted react component; use Set doesnt meet this problem, why

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
      <div className='overview-title'>
        <Typography variant='h4'>{slug} and the subordinates (if any) </Typography>
      </div>
      <div className='overview-body'>
        <EmployeeInfo name={slug} shownList={shownList} setShownList={setShownList} />
      </div>
    </div>
  );
}

export default Overview;