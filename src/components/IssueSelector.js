import React, { Component } from 'react';

import AsyncSelect from 'react-select/lib/Async';

class IssueSelector extends Component {
  state = { selectedIssue: null }

  render() {
    return (
      <div>
        <AsyncSelect />
      </div>
    )
  }
}

export default IssueSelector;