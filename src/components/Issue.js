import React, { Component } from 'react';

import Comment from './Comment';

class Issue extends Component {
  state = { isComment: false }

  render() {
    return (
      <div>
        <h5>{this.props.name}</h5>
        <p>{this.props.description}</p>
        <h6>comments: {this.props.commentsNum}</h6>
        <button onClick={() => this.setState({ isComment: true })}>Add comment</button>
        {this.state.isComment &&
          <Comment id={this.props.id} />
        }
      </div>
    )
  }
}

export default Issue;