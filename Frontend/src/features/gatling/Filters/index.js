import React, { useState, useEffect, Fragment } from 'react';
import Datalist from 'src/components/datalist';
import { setSearch } from '../utils/search';
import Input from 'src/components/Input';
import { getDate, getHtmlDate } from 'src/utilities/timeConversions';
import { LIST } from '../graphql/Queries';
import { parseFilterData } from '../utils/fetchUrl';
import 'src/main.scss';
import FetchData from 'src/components/graphql/utils';

const Filters = props => {
  const { dateRange, history } = props;
  const [query, setQuery] = useState(<></>);
  const [list, setList] = useState();
  const [filterLists, setFilterList] = useState({
    phase: [],
    brand: [],
    finalUrl: []
  });
  const [dates,setDates] = useState({
    date:getHtmlDate(new Date().getTime()),
    toDate:getHtmlDate( Date.now() - 864e5)
  })
  const [values, setValues] = useState({
    phase:"",
    brand:"",
    page:"",
    date: Date.now() - 864e5,
    toDate: new Date().getTime()
  });

  useEffect(() => {
    setQuery(FetchData(LIST, setList));
  }, []);

  const submitValues = () => {};

  let newValue = parseFilterData(list);
  // console.log(newValue);
  if (JSON.stringify(filterLists) !== JSON.stringify(newValue)) {
    setFilterList(newValue);
  }
  return (
    <Fragment>
      <div className="filters text-center">
        <div className="col s6 m3 l2">
          <Datalist
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
                  search: setSearch({ ...values, phase: value })
                });
              }
            }}
          />
        </div>
        <div className="col s6 m3 l2">
          <Datalist
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
                  search: setSearch({ ...values, brand: value })
                });
              }
            }}
          />
        </div>

      <div className="col s12 m6 l4">
        <Datalist
          className="datalistInput"
          listId="page"
          placeholder="Page"
          value={values.page}
          options={filterLists.finalUrl}
          onChange={value => {
            setValues({ ...values, page: value });
            if (filterLists.finalUrl.includes(value)) {
              history.push({
                pathname: history.pathname,
                search: setSearch({ ...values, page: value })
              });
            }
          }}
        />
      </div>
      <div className="col s6 m4 l2">
        <Input
          className="dateInput"
          type="date"
          value={dates.date}
          max={getHtmlDate(new Date().getTime())}
          min="2019-07-01"
          onChange={value => {
            setDates({...dates,date:value})
            setValues({ ...values, date: (value)?new Date(value).getTime():value });
            history.push({
              pathname: history.pathname,
              search: setSearch({ ...values, date: (value)?new Date(value).getTime():value})
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
                history.push({
                  pathname: history.pathname,
                  search: setSearch({ ...values, toDate: value })
                });
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      {query}
    </Fragment>
  );
};
export default Filters;
