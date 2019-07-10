import React, { useState, useEffect } from 'react';
import AlertCollapsible from '../../../components/alert_collapsible/index';
import './styles.scss';
import ALERTS from '../graphql/Queries';
import FetchData from '../../../components/graphql/utils';

const AlertContent = props => {
  const { history } = props;
  const [data, setData] = useState();
  const [query, setQuery] = useState(<></>);
  function compare(a, b) {
    if (a.scoreDiff > b.scoreDiff) {
      return -1;
    }
    if (a.scoreDiff < b.scoreDiff) {
      return 1;
    }
    return 0;
  }
  useEffect(() => {
    setQuery(FetchData(ALERTS, setData));
  }, []);
  let numalerts = 0;
  let DispAlerts = <></>;
  let urgent = 0;
console.log(data);
  if (data) {
    console.log(data.alert);
    const parsedata = data.alert;

    // const als = [
    //   {
    //     id: 1,
    //     title: 'Alert 1',

    //     description: 'Description of the first alert',
    //     perc: 15
    //   },
    //   {
    //     id: 2,
    //     title: 'Alert 2',

    //     description: 'Description of the second alert',
    //     perc: 50
    //   },
    //   {
    //     id: 3,
    //     title: 'Alert 3',

    //     description: 'Description of the 3rd alert',
    //     perc: 10
    //   },
    //   {
    //     id: 4,
    //     title: 'Alert 4',

    //     description: 'Description of the 4th alert',
    //     perc: 11
    //   },
    //   {
    //     id: 5,
    //     title: 'Alert 5',

    //     description: 'Description of the 5th alert',
    //     perc: 56
    //   }
    // ];
    numalerts = parsedata.length;
    parsedata.sort(compare);
    
    DispAlerts = parsedata.map((item, i) => {
      if (item.scoreDiff > 20) {
        urgent++;
      }
      return (
        <>
          <br />
          <AlertCollapsible
            {...props}
            k={item}
            key={i}
            title={item.name}
            desc={item.fetchUrl}
            perc={item.scoreDiff}
          />
        </>
      );
    });
  }
  return (
    <>
      <div className="alertpageheader text-center">
        <h1> Hello. You have {numalerts} Alerts.</h1>
      </div>
      <div className="text-center">
        <h4 className="alerturgenttext"> There are {urgent} urgent alert(s)</h4>
      </div>
      {DispAlerts}
      {query}
    </>
  );
};
export default AlertContent;
