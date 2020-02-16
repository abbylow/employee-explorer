import React, { useState, useEffect } from 'react';
import './EmployeeInfo.css';
import { getSubordinates } from '../services/getEmployee';
import { Typography } from '@material-ui/core';

export default function EmployeeInfo({ name, shownList, setShownList }) {

  const [position, setPosition] = useState('');
  const [subordinates, setSubordinates] = useState([]);

  useEffect(() => {
    async function getInfo(name) {
      const thisEmployee = await getSubordinates(name);
      setPosition(thisEmployee.position);
      setShownList(prev => prev.add(name));

      let deduplicatedSubs = Array.from(thisEmployee.directSubordinates);
      deduplicatedSubs.forEach((sub, idx) => {
        if (shownList.has(sub)) {
          deduplicatedSubs.splice(idx, 1);
        }
      });

      deduplicatedSubs.forEach((sub) => {
        setShownList(prev => prev.add(sub))
      });
      
      setSubordinates(deduplicatedSubs);
    }

    getInfo(name);

    return;
  }, [name, shownList, setShownList])


  return (
    <div className='info'>
      <div className='self-position'>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='subtitle1'>{position ? position : 'No position in this company'}</Typography>
      </div>
      {
        subordinates.map(sub => (
          <EmployeeInfo name={sub} key={sub} shownList={shownList} setShownList={setShownList} />
        ))
      }
    </div>
  );
}

