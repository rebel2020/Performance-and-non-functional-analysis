import { Query } from 'react-apollo';
import React from 'react';

const FetchData = (QueryData, setData, variables) => {
  // console.log(variables);
  return (
    <Query query={QueryData} variables={variables}>
      {({ loading, error, data }) => {
        if (error) console.log(error.message);
        else if (loading) console.log('loading', loading);
        else {
          // console.log(data);
          setData(data);
        }
        return null;
      }}
    </Query>
  );
};

export default FetchData;
