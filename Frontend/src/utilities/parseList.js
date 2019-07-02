import React from 'react';

const parseFilterData = (Data) => {
    console.log
    let Brand=[],Phase=[],Project=[],FinalUrl = [];
    Data.lighthousedata.forEach((val,i) => {
        if(Brand.indexOf(val.brand.trim()) === -1) 
            Brand.push(val.brand);
        if(Phase.indexOf(val.phase.trim()) === -1) 
            Phase.push(val.phase.trim());
        if(Project.indexOf(val.project) === -1) 
            Project.push(val.project);

        FinalUrl.push(val.finalUrl);
        // console.log(val.phase,val);
    });
    // console.log(Brand,Phase,Project);
    let filterList = {
        brand:Brand,
        phase:Phase,
        project:Project,
        finalUrl:FinalUrl
    }
    console.log(filterList);
}

export {parseFilterData};