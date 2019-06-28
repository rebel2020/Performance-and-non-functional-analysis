import React from 'react';

const AuditData = (data) => {
    const audit = [];
    const auditName = Object.keys(data)[0];
    let keys = [];
    if(data[auditName]){
        keys = Object.keys(data[auditName]);
        keys.forEach((value)=>{
            audit.push({
                title:value,
                ... data[auditName][value]
            })
        })
    }
    console.log(audit);
    return audit;
}

export {AuditData};