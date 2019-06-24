import gql from 'graphql-tag';

const TEST = gql`
  query {
    Parameters {
      date
      performance
      accessibility
      bestPractices
      seo
      progressiveWebApps
    }
  }
`;
export { TEST };
