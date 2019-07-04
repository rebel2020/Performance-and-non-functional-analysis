import React from 'react';

const parseFilterData = Data => {
  const Url = ['All'];
  Data.gatlingdata.forEach((val) => {
    if (Url.indexOf(val.url.trim()) === -1) Url.push(val.url);
  })  
};

export {parseFilterData};
