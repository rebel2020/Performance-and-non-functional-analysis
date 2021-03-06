import React from 'react';

const parseFilterData = Data => {
  let filterList = {
    brand: [],
    phase: [],
    finalUrl: []
  };
  if (Data) {
    const Url = ['All'];
    const Brand = ['All'];
    const Phase = ['All'];
    Data.gatlingdata.forEach(val => {
      if (Url.indexOf(val.url.trim()) === -1) Url.push(val.url);
      if (Brand.indexOf(val.brand.trim()) === -1) Brand.push(val.brand);
      if (Phase.indexOf(val.phase.trim()) === -1) Phase.push(val.phase.trim());
    });
    filterList = {
      brand: Brand,
      phase: Phase,
      finalUrl: Url
    };
    // console.log(filterList);
  }
  return filterList;
};

export { parseFilterData };
