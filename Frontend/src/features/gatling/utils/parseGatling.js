import React from 'react';

const calculateSum = (sum,stat) => {
    sum.group1.count  += stat.group1.count;
    sum.group2.count  += stat.group2.count;
    sum.group3.count  += stat.group3.count;
    sum.group4.count  += stat.group4.count;
    sum.numberOfRequests.ok += stat.numberOfRequests.ok;
    sum.numberOfRequests.ko += stat.numberOfRequests.ko;
    sum.numberOfRequests.total += stat.numberOfRequests.total;
    sum.dispatcher_stats = stat.dispatcher_stats;
    sum.publisher_stats = stat.publisher_stats;
  return sum
}

const parseGatlingData = data => {
  let stats,sum;
  if (data && data.gatlingdata.length) {
    stats = [];
    sum = {
      dispatcher_stats:"",
      publisher_stats:"",
      group1:{ count:0 },
      group2:{ count:0 },
      group3:{ count:0 },
      group4:{ count:0 },
      numberOfRequests:{
         ok:0,
         ko:0,
         total:0 
      }
    }
    data.gatlingdata.sort((a,b) => a.fetchTime > b.fetchTime);
    data.gatlingdata.forEach((val) => {
      // console.log(val.fetchTime);
      const parsedData = JSON.parse(val.stats);
      let stat = {...parsedData.stats,...val,...val.server_stats};
      delete stat.stats;
      delete stat.server_stats
      stats.push(stat);
      sum = calculateSum(sum,stat);
    });
  }
  return {stats,sum};
};

export { parseGatlingData };
