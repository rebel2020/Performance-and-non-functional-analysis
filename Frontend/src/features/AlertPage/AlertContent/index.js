import React from 'react';
import AlertCollapsible from '../../../components/alert_collapsible/index';
import './styles.scss';

const AlertContent = props => {
  const { history } = props;
  function compare(a, b) {
    if (a.perc > b.perc) {
      return -1;
    }
    if (a.perc < b.perc) {
      return 1;
    }
    return 0;
  }

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
    },
    {
      id: 3,
      title: 'Alert 3',

      description: 'Description of the 3rd alert',
      perc: 10
    },
    {
      id: 4,
      title: 'Alert 4',

      description: 'Description of the 4th alert',
      perc: 11
    },
    {
      id: 5,
      title: 'Alert 5',

      description: 'Description of the 5th alert',
      perc: 56
    }
  ];
  const numalerts = als.length;
  als.sort(compare);
  let urgent = 0;
  const DispAlerts = als.map((item, i) => {
    if (item.perc > 20) {
      urgent++;
    }
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
  return (
    <>
      <div className=" container alertpageheader text-center">
        <h1> Hello. You have{numalerts} Alerts.</h1>
      </div>
      <div className="container alerturgenttext text-center">
        <h4> There are{urgent} urgent alert(s)</h4>
      </div>
      {DispAlerts}
    </>
  );
};
export default AlertContent;
