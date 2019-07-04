import React, { useState } from 'react';
import Datalist from 'src/components/datalist';
import { getDate } from 'src/utilities/timeConversions';
import Input from 'src/components/Input';
import useGlobal from 'src/store';
import './main.scss';

const Filters = props => {
  const [globalState, globalActions] = useGlobal();
  const { setPage, setDate, setToDate, setBrand, setEnv, setPagecomp } = globalActions;
  const { phase, brand, page, date, toDate, filterLists } = globalState;
  const { dateRange, options } = props;
  const [values, setValues] = useState({ phase, brand, page, date, toDate });
  return (
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
            if (filterLists.phase.includes(value)) setEnv(value);
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
            if (filterLists.brand.includes(value)) setBrand(value);
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
            if (filterLists.finalUrl.includes(value)) setPage(value);
          }}
        />
      </div>
      <div className="col s6 m4 l2">
        <Input
          className="dateInput"
          type="date"
          value={new Date(values.date).toISOString().substring(0, 10)}
          max={new Date().toISOString().substring(0, 10)}
          min="2019-07-01"
          onChange={value => setDate(value)}
        />
      </div>
      <div className="col s6 m4 l2">
        {dateRange === 'range' ? (
          <Input
            className="dateInput"
            type="date"
            value=""
            max={new Date().toISOString().substring(0, 10)}
            min="2019-07-01"
            onChange={value => setToDate(value)}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Filters;
