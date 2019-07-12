import React, { useState, useEffect } from 'react';
import AlertCollapsible from '../../../components/alert_collapsible/index';
import './styles.scss';
import ALERTS from '../graphql/Queries';
import FetchData from '../../../components/graphql/utils';
import formatString from '../../../utilities/formatString';
import { parse } from 'url';

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
    console.log(data.alerts);
    const parsedata = data.alerts[0].alert;
    console.log(parsedata);

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
      const formatName = formatString(item.name);
      if (item.scoreDiff > 20) {
        urgent++;
      }
      const roundScore = Math.round(item.scoreDiff);
      return (
        <>
          <br />
          <AlertCollapsible
            {...props}
            k={i}
            key={i}
            title={item.fetchUrl}
            desc={formatName}
            category={item.category}
            perc={roundScore}
          />
        </>
      );
    });
  }
  return (
    <>
      <div className="alertpageheader text-center">
        <h1>{`Hello. You have ${numalerts} Alerts.`}</h1>
      </div>
      <div className="text-center">
        <h4 className="alerturgenttext">{`There are ${urgent} urgent alert(s)`}</h4>
      </div>
      {DispAlerts}
      {query}
    </>
  );
};
export default AlertContent;
