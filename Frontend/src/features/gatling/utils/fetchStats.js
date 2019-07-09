import React from 'react';

 const fetchStats = (data) => {
    let stats;
        if(data && data.gatlingdata.length){
            stats = [];
            data.gatlingdata.forEach(val => {
                let parsedData = JSON.parse(val.stats);
                // console.log(parsedData.stats);
                stats.push({
                    meanResponseTime:parsedData.stats.meanResponseTime,
                });                    
            });
    }
    return stats;
}

export  {fetchStats};