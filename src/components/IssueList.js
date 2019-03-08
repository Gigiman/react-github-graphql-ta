import React from 'react';

import Issue from './Issue';

const IssueList = props => {
  const issues = props.issues.map(issue => {
    return (
      <Issue 
        key={issue.node.id}
        id={issue.node.id}
        name={issue.node.title}
        description={issue.node.bodyText}
        commentsNum={issue.node.comments.totalCount}
      />
    )
  })

  return (
    <div>{issues}</div>
  );
}

export default IssueList;