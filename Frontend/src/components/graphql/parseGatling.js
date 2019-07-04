import React from 'react';

const parseGatlingData = data => {
  if (data) {
    const parsedData = JSON.parse(data.gatlingdata[0].stats);
    // console.log(parsedData.stats.group1);
    const stats = {
      group1: parsedData.stats.group1,
      group2: parsedData.stats.group2,
      group3: parsedData.stats.group3,
      numberOfRequests: parsedData.stats.numberOfRequests
    };
    console.log(stats);
  }
};

export default parseGatlingData;
