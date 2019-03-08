import React, { Component } from 'react';

class IssueSelector extends Component {
  state = { 
    inputValue: ''
  }

  handleInputChange = inputValue => {
    this.setState({ inputValue })
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.inputValue)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder="Repository name" 
          value={this.state.inputValue}
          onChange={e => this.handleInputChange(e.target.value)}
        />
      </form>
    )
  }
}

export default IssueSelector;
