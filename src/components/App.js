import React, { Component } from 'react';

import './App.css'
import RepositorySearch from './RepositorySearch';
import Repository from './Repository';

class App extends Component {
  state = { searchTerm: undefined }

  onSearchSubmit = searchTerm => this.setState({ searchTerm })

  render () {
    return (
      <div>
        <h1>Github repos open ussues tracker</h1>
        <p>Please write repositories name in input to see the issues currently opened in it</p>
        <RepositorySearch onSearchSubmit={this.onSearchSubmit} />
        <Repository name={this.state.searchTerm} />
      </div>
    )
  }
}

export default App;