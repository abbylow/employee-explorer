import React, { Component } from 'react';
import './Home.css';
import { Typography, Input, IconButton } from '@material-ui/core';
import { Magnify } from 'mdi-material-ui';

export default class Home extends Component {

  state = { searchText: '' };

  updateSearchText = (e) => {
    this.setState({ searchText: e.target.value });
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleSearch();
    }
  }

  handleSearch = () => {
    this.props.history.push(`/overview/${this.state.searchText}`)
  }

  render() {
    const { searchText } = this.state;

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
              onChange={this.updateSearchText}
              onKeyDown={this.handleKeyDown}
              className='search-input'
              fullWidth
            />
            <IconButton onClick={this.handleSearch}>
              <Magnify className='search-icon' />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

