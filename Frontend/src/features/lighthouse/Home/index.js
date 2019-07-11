import React, { useState, useEffect, useRef } from 'react';
import previousState from 'src/utilities/previousState';
import { getTimeRange, getDate } from 'src/utilities/timeConversions';
import compare from 'src/utilities/compareObjects';
import { averageMap } from 'src/utilities/map';
import FetchData from 'src/components/graphql/utils';
import { AVG_SCORES } from 'src/components/graphql/Queries';
import SolidGauge from 'src/components/solidgauge';
import Alert from 'src/components/alerts/index';
import searchParams from 'src/utilities/searchParams';
import ALERTS from '../../AlertPage/graphql/Queries';

import Filters from '../../Filters';
import Audits from '../Audits';
import './main.scss';

const HomeComponent = props => {
  const { history } = props;
  const { metric } = history.location;
  const { phase, brand, page, date } = searchParams(history.location.search);
  const [data, setData] = useState({ average: [] });
  const [alertData, setAlertData] = useState();
  const [query, setQuery] = useState(<></>);
  const [alertQuery, setAlertQuery] = useState(<></>);
  const variables = {
    phase,
    brand,
    finalUrl: page,
    ...getTimeRange(date)
  };
  useEffect(() => {
    setAlertQuery(FetchData(ALERTS, setAlertData));
  }, []);
  let numalerts = 0;
  // console.log(variables);
  // console.log(data);
  let alertContainer = <></>;
  console.log(alertData);
  if (alertData) {
    console.log(alertData);
    const parsedata = alertData.alerts[0].alert;

    numalerts = parsedata.length;

    if (numalerts > 0) {
      alertContainer = <Alert history={history} numalerts={numalerts} {...props} />;
    }
  }
  const prevState = previousState({ phase, brand, page, date });
  const onMount = useRef(true);
  useEffect(() => {
    if (onMount.current) {
      setQuery(FetchData(AVG_SCORES, setData, variables));
      onMount.current = false;
      return;
    }
    if (!compare(prevState, { phase, brand, page, date })) {
      setQuery(FetchData(AVG_SCORES, setData, variables));
    }
  });
  const obj = data.average[0] ? data.average[0] : {};
  const flexItems = ['performance', 'accessibility', 'best_practices', 'p_w_a', 's_e_o'].map(
    (item, i) => {
      return (
        <div key={item}>
          <SolidGauge
            name={item}
            value={Math.round(obj[averageMap[item]] ? obj[averageMap[item]] * 10000 : '') / 100}
            // value={70}
            {...props}
          />
        </div>
      );
    }
  );

  let auditContainer = <></>;
  if (metric) auditContainer = <Audits metric={metric} {...props} />;

  let message = '';
  if (!page && !brand && !phase)
    message = `\nNote:\n\nThe displayed data are the average metric scores of all the pages on ${getDate(
      date,
      0
    )}.`;
  else if (!page && !brand)
    message = `\nNote:\n\nThe displayed data are the average metric scores of all the pages in ${phase} environment on ${getDate(
      date,
      0
    )}.`;
  else if (!page && !phase)
    message = `\nNote:\n\nThe displayed data are the average metric scores of all the pages of ${brand} brand in all environments on ${getDate(
      date,
      0
    )}.`;
  else if (!phase && !brand)
    message = `\nNote:\n\nThe displayed data are the average metric scores of ${page} in all environments on ${getDate(
      date,
      0
    )}.`;
  else if (!phase)
    message = `\nNote:\n\nThe displayed data are the average metric scores of ${page} in all environments on ${getDate(
      date,
      0
    )}.`;
  else if (!brand)
    message = `\nNote:\n\nThe displayed data are the average metric scores of ${page} in ${phase} environment on ${getDate(
      date,
      0
    )}.`;
  else if (!page)
    message = `\nNote:\n\nThe displayed data are the average metric scores of all the pages of ${brand} in ${phase} environment on ${getDate(
      date,
      0
    )}.`;
  else
    message = `\nNote:\n\nThe displayed data are the average metric scores of ${page} in ${phase} environment on ${getDate(
      date,
      0
    )}.`;
  return (
    <>
      {alertQuery}
      <div className="text-center">{alertContainer}</div>
      <div className="container ">
        <Filters dateRange="single" history={history} />
        <div className="customcontainer">
          <div className="customcard">
            <div className="flexbox">{flexItems}</div>
            {auditContainer}
            {query}
            <div className="note">{message}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeComponent;
