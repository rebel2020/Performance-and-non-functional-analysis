import React, { useState, useEffect } from 'react';
import Datalist from 'src/components/datalist';
import { getHtmlDate } from 'src/utilities/timeConversions';
import compare from 'src/utilities/compareObjects';
import previousState from 'src/utilities/previousState';
import setSearch from 'src/utilities/search';
import searchParams from 'src/utilities/searchParams';
import { pagesMap } from 'src/utilities/map';
// import formatString from 'src/utilities/formatString';
import Input from 'src/components/Input';
import useGlobal from 'src/store';
import './main.scss';
import SelectList from '../../components/selectlist';

const Filters = props => {
  const [globalState] = useGlobal();
  const { filterLists } = globalState;
  const { dateRange, history } = props;
  const { env, brand, page, date, toDate } = searchParams(history.location.search);
  const [values, setValues] = useState({
    phase: env || 'All',
    brand: brand || 'All',
    page: pagesMap[page] || 'All',
    date: getHtmlDate(date),
    toDate: getHtmlDate(toDate)
  });
  const prevState = previousState({ env, brand, page, date, toDate });
  useEffect(() => {
    if (!compare(prevState, { env, brand, page, date, toDate }))
      setValues({
        phase: env || 'All',
        brand: brand || 'All',
        page: pagesMap[page] || 'All',
        date: getHtmlDate(date),
        toDate: getHtmlDate(toDate)
      });
  });
  return (
    <div className="filters text-center">
      <div className="col s6 m3 l2">
        <div className="color--white">Env</div>
        <SelectList
          className="datalistInput"
          placeholder="Env"
          value={values.phase}
          listId="phase"
          options={filterLists.phase}
          onChange={value => {
            setValues({ ...values, phase: value });
            if (filterLists.phase.includes(value)) {
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
        <div className="color--white">Brand</div>
        <SelectList
          className="datalistInput"
          placeholder="Brand"
          value={values.brand}
          listId="brands"
          options={filterLists.brand}
          onChange={value => {
            setValues({ ...values, brand: value });
            if (filterLists.brand.includes(value)) {
              history.push({
                pathname: history.pathname,
                search: setSearch({ phase: env, brand: value, page, date, toDate })
              });
            }
          }}
        />
      </div>

      <div className="col s12 m6 l4">
        <div className="color--white">Page</div>
        <Datalist
          className="pagelistInput"
          listId="page"
          placeholder="Page"
          value={values.page}
          options={filterLists.components}
          onChange={value => {
            setValues({ ...values, page: value });
            if (filterLists.components.includes(value)) {
              history.push({
                pathname: history.pathname,
                search: setSearch({
                  phase: env,
                  brand,
                  page: Object.keys(pagesMap).filter(p => pagesMap[p] === value)[0],
                  date,
                  toDate
                })
              });
            }
          }}
        />
      </div>
      <div className="col s6 m4 l2">
        <div className="color--white">{dateRange === 'range' ? 'From' : 'Date'}</div>
        <Input
          className="dateInput"
          type="date"
          value={values.date}
          max={getHtmlDate(new Date().getTime())}
          min="2019-06-01"
          onChange={value => {
            setValues({ ...values, date: value });
            history.push({
              pathname: history.pathname,
              search: setSearch({
                phase: env,
                brand,
                page,
                date: new Date(value).getTime() - 19800000,
                toDate
              })
            });
          }}
        />
      </div>
      {dateRange === 'range' ? (
        <div className="col s6 m4 l2">
          <div className="color--white">To</div>
          <Input
            className="dateInput"
            type="date"
            value={values.toDate}
            max={getHtmlDate(new Date().getTime())}
            min="2019-06-01"
            onChange={value => {
              setValues({ ...values, toDate: value });
              history.push({
                pathname: history.pathname,
                search: setSearch({
                  phase: env,
                  brand,
                  page,
                  date,
                  toDate: new Date(value).getTime() + 66600000 - 1
                })
              });
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Filters;
