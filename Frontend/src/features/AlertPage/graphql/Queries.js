import gql from 'graphql-tag';

const ALERTS = gql`
  query {
    alerts {
      alert {
        name
        class
        scoreDiff
        category
        fetchUrl
      }
    }
  }
`;

export default ALERTS;
