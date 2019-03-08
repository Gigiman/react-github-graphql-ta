import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import _isEmpty from 'lodash/isEmpty'

// import Loader from './Loader';
import IssueList from './IssueList';

const GET_REPOSITORIES = gql`
  query repositoriesByName($name: String!) {
    search(query: $name, type: REPOSITORY, first: 1) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            descriptionHTML
            issues(states: [OPEN], last: 10) {
              edges {
                node {
                  id
                  bodyText
                  createdAt
                  title
                  url
                  repository {
                    name
                  }
                  comments {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Profile = ({ name }) => {
  return (
    <Query query={ GET_REPOSITORIES } variables={{ name }}>
      {({ data }) => {
        if (data && !_isEmpty(name)) {
          const repositories = data.search.edges;

          return repositories.map(repository => {
            // console.log(repository)
            // console.log(repository.node.issues.edges)
            return (
              <div key={repository.node.id}>
                <p>{repository.node.name}</p>
                <IssueList issues={repository.node.issues.edges} />
              </div>
            )
          })
        }

        return (
          <div>Replace me with a normal list of repositories</div>
        )
      }}
    </Query>
  )
}

export default Profile;