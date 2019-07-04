import React from 'react';

const parseFilterData = Data => {
  if(Data){
    let Url = ['All'];
    let Brand = ['All'];
    let Phase = ['All'];
    Data.gatlingdata.forEach((val) => {
      if (Url.indexOf(val.url.trim()) === -1) Url.push(val.url);
      if (Brand.indexOf(val.brand.trim()) === -1) Brand.push(val.brand);
      if (Phase.indexOf(val.phase.trim()) === -1) Phase.push(val.phase.trim());
    })  
    let filterList = {
      brand: Brand,
      phase: Phase,
      finalUrl: Url
    };
    console.log(filterList);
  }
};

export {parseFilterData};
