import React, { Component } from 'react';

import Comment from './Comment';

class Issue extends Component {
  state = { isComment: false }

  onCommentSave = () => this.setState({ isComment: false })

  render() {
    return (
      <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <p className="header">{this.props.name}</p>
          <p className="description">{this.props.description}</p>
          <h5>{this.props.commentsNum} comments</h5>
          {!this.state.isComment &&
              <button
              className="ui grey button" 
              onClick={() => this.setState({ isComment: true })}
            >
              Add comment
            </button>
          }
          {this.state.isComment &&
            <Comment onSave={this.onCommentSave} id={this.props.id} />
          }
        </div>
      </div>
    )
  }
}

export default Issue;