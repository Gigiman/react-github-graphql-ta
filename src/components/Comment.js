import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_COMMENT=gql`
  mutation($id: ID!, $body: String!) {
    addComment(input:{
      subjectId: $id,
      body: $body
    }) {
      clientMutationId
    }
  }
`;

const Comment = (props) => {
  let input;

  console.log(props);

  return (
    <Mutation mutation={ADD_COMMENT}>
      {(addComment) => (
        <div>
          <textarea
            ref={node => {
              input = node;
            }}
          />
          <button onClick={ () => addComment({ variables: {id: props.id, body: input.value } }) }>Add Comment</button>
        </div>
      )}
    </Mutation>
  );
}

export default Comment;