import React, { useState } from 'react';
import './Home.css';
import { Typography, Input, IconButton } from '@material-ui/core';
import { Magnify } from 'mdi-material-ui';

export default function Home({ history }) {

  const [searchText, setSeachText] = useState('');

  function updateSearchText(e) {
    setSeachText(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleSearch();
    }
  }

  function handleSearch() {
    history.push(`/overview/${searchText}`)
  }

  return (
    <div className="home" >
      <div className='title'>
        <Typography variant='h2' align='center'>Employee Explorer</Typography>
      </div>
      <div className='search-area'>
        <div className='search-bar'>
          <Input
            placeholder="Enter employee name "
            disableUnderline
            value={searchText}
            onChange={updateSearchText}
            onKeyDown={handleKeyDown}
            className='search-input'
            fullWidth
          />
          <IconButton onClick={handleSearch}>
            <Magnify className='search-icon' />
          </IconButton>
        </div>
      </div>
    </div>
  );

}

