import React from 'react';

 const parseGatlingData = (data) => {
    let stats;
    console.log(data);
        if(data){
            let parsedData = JSON.parse(data.gatlingdata[1].stats);
            // console.log(parsedData.stats,data.gatlingdata[1].server_stats);
            stats = {
                group1:parsedData.stats.group1,
                group2:parsedData.stats.group2,
                group3:parsedData.stats.group3,
                numberOfRequests:parsedData.stats.numberOfRequests,
                meanResponseTime:parsedData.stats.meanResponseTime,
                meanNumberOfRequestsPerSecond:parsedData.stats.meanNumberOfRequestsPerSecond,
                author_stats:data.gatlingdata[1].server_stats.author_stats,
                publisher_stats:data.gatlingdata[1].server_stats.publisher_stats
        }
        console.log(stats);
    }
    return stats;
}

export  {parseGatlingData};