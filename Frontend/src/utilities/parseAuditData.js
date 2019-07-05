import React from 'react';

const AuditData = data => {
  if (!data) return;
  const audit = [];
  const auditName = Object.keys(data)[0];
  let keys = [];
  if (data[auditName]) {
    keys = Object.keys(data[auditName]);
    keys.forEach((value, i) => {
      audit.push({
        id: i,
        title: value,
        ...data[auditName][value]
      });
    });
  }
  // console.log(audit);
  return audit;
};

export default AuditData;
