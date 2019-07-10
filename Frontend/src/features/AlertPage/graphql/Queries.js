import gql from 'graphql-tag';

const ALERTS = gql`
  query {
    alerts {
      alert {
        name

        scoreDiff
        category
        fetchUrl
        alertClass
      }
    }
  }
`;

export default ALERTS;
