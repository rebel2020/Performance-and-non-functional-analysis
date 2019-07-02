import React from 'react';
import AlertCollapsible from '../../../components/alert_collapsible/index';

const AlertContent = props => {
  const { history } = props;

  const als = [
    {
      id: 1,
      title: 'Alert 1',

      description: 'Description of the first alert',
      perc: 15
    },
    {
      id: 2,
      title: 'Alert 2',

      description: 'Description of the second alert',
      perc: 50
    }
  ];
  const DispAlerts = als.map((item, i) => {
    return (
      <>
        <br />
        <AlertCollapsible
          {...props}
          k={item.id}
          key={item.id}
          title={item.title}
          desc={item.description}
          perc={item.perc}
        />
      </>
    );
  });
  return <>{DispAlerts}</>;
};
export default AlertContent;
