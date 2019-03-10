import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import _isEmpty from 'lodash/isEmpty'

import Loader from './Loader';
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
      {({ data, loading, error }) => {
        if (loading) {
          return <Loader />
        }

        if (error && !_isEmpty(name)) {
          return (
            <div>
              Something went wrong
            </div>
          )
        }

        if (data && !_isEmpty(name)) {
          const repositories = data.search.edges;

          return repositories.map(repository => {
            return (
              <div key={repository.node.id}>
                <h3 className="repository-name">Repository name: {repository.node.name}</h3>
                <IssueList issues={repository.node.issues.edges} />
              </div>
            )
          })
        }

        return null
      }}
    </Query>
  )
}

export default Profile;