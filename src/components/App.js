import React, { Component } from 'react';

import IssueSelector from './IssueSelector';
import IssueList from './IssuesList';

class App extends Component {
  render () {
    return (
      <div>
        Test Assignment
        <IssueSelector />
        <IssueList />
      </div>
    )
  }
}

export default App;