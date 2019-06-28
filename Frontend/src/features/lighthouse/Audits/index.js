import React from 'react';
import Collapsible from 'src/components/collapsible';

const Audit = props => {
  const pa = [
    {
      title: 'first_contentful_paint',
      id: 1,
      weight: 3,
      score: 0.49,
      description:
        'First Contentful Paint marks the time at which the first text or image is painted',
      numericValue: 4034,
      link: 'performance'
    },
    {
      title: 'user_timings',
      id: 2,
      weight: 0,
      score: null,
      description:
        "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences",
      numericValue: null,
      link: 'performance'
    }
  ];
  const DispAudit = pa.map((item, i) => {
    console.log(item.id);
    return (
      <Collapsible
        {...props}
        key={item.id}
        k={item.id}
        title={item.title}
        desc={item.description}
        score={item.score}
        weight={item.weight}
        nv={item.numericValue}
        link={item.link}
      />
    );
  });
  return DispAudit;
};

export default Audit;
