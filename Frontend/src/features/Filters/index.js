import React, { useState, useEffect } from 'react';
import Datalist from 'src/components/datalist';
// import SelectList from 'src/components/selectlist';
import { getDate, getHtmlDate } from 'src/utilities/timeConversions';
import compare from 'src/utilities/compareObjects';
import previousState from 'src/utilities/previousState';
import setSearch from 'src/utilities/search';
import searchParams from 'src/utilities/searchParams';
import Input from 'src/components/Input';
import useGlobal from 'src/store';
import './main.scss';
import SelectList from '../../components/selectlist';

const Filters = props => {
  const [globalState, globalActions] = useGlobal();
  const { setPage, setDate, setToDate, setBrand, setEnv, setPagecomp } = globalActions;
  // const { phase, brand, page, date, toDate, filterLists } = globalState;
  const { filterLists } = globalState;
  const { dateRange, history } = props;
  const { env, brand, page, date, toDate } = searchParams(history.location.search);
  const [values, setValues] = useState({
    phase: env || 'All',
    brand: brand || 'All',
    page: page || 'All',
    date: getHtmlDate(date),
    toDate: getHtmlDate(toDate)
  });
  const prevState = previousState({ env, brand, page, date, toDate });
  // console.log(values);
  useEffect(() => {
    if (!compare(prevState, { env, brand, page, date, toDate }))
      setValues({
        phase: env || 'All',
        brand: brand || 'All',
        page: page || 'All',
        date: getHtmlDate(date),
        toDate: getHtmlDate(toDate)
      });
  });
  return (
    <div className="filters text-center">
      <div className="col s6 m3 l2">
        <SelectList
          className="datalistInput"
          placeholder="Env"
          value={values.phase}
          listId="phase"
          options={filterLists.phase}
          // options={['a', 'b', 'c']}
          onChange={value => {
            setValues({ ...values, phase: value });
            if (filterLists.phase.includes(value)) {
              // setEnv(value);
              history.push({
                pathname: history.pathname,
                search: setSearch({ phase: value, brand, page, date, toDate })
              });
            } else {
              console.log(value);
            }
          }}
        />
      </div>
      <div className="col s6 m3 l2">
        <SelectList
          className="datalistInput"
          placeholder="Brand"
          value={values.brand}
          listId="brands"
          options={filterLists.brand}
          onChange={value => {
            setValues({ ...values, brand: value });
            if (filterLists.brand.includes(value)) {
              // setBrand(value);
              history.push({
                pathname: history.pathname,
                search: setSearch({ phase: env, brand: value, page, date, toDate })
              });
            }
          }}
        />
      </div>

      <div className="col s12 m6 l4">
        <Datalist
          className="pagelistInput"
          listId="page"
          placeholder="Page"
          value={values.page}
          options={filterLists.finalUrl}
          onChange={value => {
            setValues({ ...values, page: value });
            if (filterLists.finalUrl.includes(value)) {
              // setPage(value);
              history.push({
                pathname: history.pathname,
                search: setSearch({ phase: env, brand, page: value, date, toDate })
              });
            }
          }}
        />
      </div>
      <div className="col s6 m4 l2">
        <Input
          className="dateInput"
          type="date"
          value={values.date}
          max={getHtmlDate(new Date().getTime())}
          min="2019-07-01"
          onChange={value => {
            setValues({ ...values, date: value });
            // setDate(value);
            history.push({
              pathname: history.pathname,
              search: setSearch({
                phase: env,
                brand,
                page,
                date: new Date(value).getTime(),
                toDate
              })
            });
          }}
        />
      </div>
      <div className="col s6 m4 l2">
        {dateRange === 'range' ? (
          <Input
            className="dateInput"
            type="date"
            value={values.toDate}
            max={getHtmlDate(new Date().getTime())}
            min="2019-07-01"
            onChange={value => {
              setValues({ ...values, toDate: value });
              // setToDate(value);
              history.push({
                pathname: history.pathname,
                search: setSearch({
                  phase: env,
                  brand,
                  page,
                  date,
                  toDate: new Date(value).getTime()
                })
              });
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Filters;
