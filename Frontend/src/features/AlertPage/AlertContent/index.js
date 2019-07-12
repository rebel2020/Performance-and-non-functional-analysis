import React, { useState, useEffect } from 'react';
import AlertCollapsible from '../../../components/alert_collapsible/index';
import './styles.scss';
import ALERTS from '../graphql/Queries';
import FetchData from '../../../components/graphql/utils';
import formatString from '../../../utilities/formatString';
import { parse } from 'url';

// let urgentData = 0;
// const setUrgentData = i => {
//   urgentData = urgentData + i;
// }
const AlertContent = props => {
  const { history } = props;
  const [data, setData] = useState();
  const [query, setQuery] = useState(<></>);
  // const [urgentData, setUrgentData] = useState();
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
  // let urgent = 0;
  console.log(data);
  if (data) {
    console.log(data.alerts);
    const parsedata = data.alerts;
    console.log(parsedata);
    // numalerts = parsedata.length;
    // parsedata.sort(compare);
    // let desclist = [];
    // for (var i in parsedata) {
    //   desclist[i] = parsedata[i].name;
    // }
    // console.log(desclist);
    DispAlerts = parsedata.map((item, i) => {
      numalerts = numalerts + item.alert.length;

      // const formatName = formatString(item.name);
      // if (item.alert[item].scoreDiff > 20.0) {
      //   urgent++;
      // }
      // const roundScore = Math.round(item.scoreDiff);
      return (
        <>
          <br />
          <AlertCollapsible
            {...props}
            // urgentData={urgentData}
            // setUrgentData={setUrgentData}
            k={i}
            key={i}
            title={item.alert[0].fetchUrl}
            desc={item.alert}
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
      {/* <div className="text-center">
        <h4 className="alerturgenttext">{`There are ${urgentData} urgent alert(s)`}</h4>
      </div> */}
      {DispAlerts}
      {query}
    </>
  );
};
export default AlertContent;
