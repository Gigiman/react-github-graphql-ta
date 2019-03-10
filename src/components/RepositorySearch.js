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
        <div className="ui input search-input">
          <input 
            type="text"
            placeholder="Repository name" 
            value={this.state.inputValue}
            onChange={e => this.handleInputChange(e.target.value)}
          />
        </div>
        <div>
          <button 
            onClick={this.handleSubmit} 
            className="ui inverted primary button search-button"
          >
            Search
          </button>        
        </div>
      </form>
    )
  }
}

export default IssueSelector;
