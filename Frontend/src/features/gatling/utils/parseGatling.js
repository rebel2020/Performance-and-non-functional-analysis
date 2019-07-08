import React from 'react';

 const parseGatlingData = (data) => {
    let stats;
        if(data && data.gatlingdata.length){
            stats = [];
            data.gatlingdata.forEach(val => {
                let parsedData = JSON.parse(val.stats);
                // console.log(parsedData.stats);
                stats.push({
                    group1:parsedData.stats.group1,
                    group2:parsedData.stats.group2,
                    group3:parsedData.stats.group3,
                    group4:parsedData.stats.group4,
                    numberOfRequests:parsedData.stats.numberOfRequests,
                    meanResponseTime:parsedData.stats.meanResponseTime,
                    meanNumberOfRequestsPerSecond:parsedData.stats.meanNumberOfRequestsPerSecond,
                    dispatcher_stats:val.server_stats.dispatcher_stats,
                    publisher_stats:val.server_stats.publisher_stats
                });                    
            });
    }
    return stats;
}

export  {parseGatlingData};