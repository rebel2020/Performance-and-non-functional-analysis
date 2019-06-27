import { Query } from 'react-apollo';
import React from 'react';

const FetchData = (QueryData, setData) => {
  return (
    <Query query={QueryData}>
      {({ loading, error, data }) => {
        if (error) console.log(error.message);
        if (loading) console.log(loading);
        else {
          setData(data);
        }
        return null;
      }}
    </Query>
  );
};

export default FetchData;
