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

  return (
    <Mutation mutation={ADD_COMMENT}>
      {(addComment) => (
        <div className="ui form">
          <div className="field">
            <label>Commentary</label>
            <textarea
              ref={node => {
                input = node;
              }}
            />
          </div>
          <button 
            className="ui black button" 
            onClick={() => {
              addComment({ variables: {id: props.id, body: input.value } });
              props.onSave();
            }}
          >
            Save
          </button>
        </div>
      )}
    </Mutation>
  );
}

export default Comment;