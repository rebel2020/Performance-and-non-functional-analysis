import React from 'react';
import Datalist from 'src/components/datalist';
// import SelectList from 'src/components/selectlist';
import Input from 'src/components/Input';
import useGlobal from 'src/store';
import './main.scss';

const Filters = props => {
  const [globalState, globalActions] = useGlobal();
  const { setPage, setDate, setToDate, setBrand, setEnv, setPagecomp } = globalActions;
  const { env, brand, page, date, toDate } = globalState;
  const { dateRange, options } = props;
  // console.log(options);
  return (
    <div className="filters text-center">
      <div className="col s6 m3 l2">
        <Datalist
          className="datalistInput"
          placeholder="Env"
          value={env}
          listId="env"
          options={options || []}
          onChange={value =>
            options.includes(value) ? setEnv(value) : console.log(options.includes(value))
          }
        />
      </div>
      <div className="col s6 m3 l2">
        <Datalist
          className="datalistInput"
          placeholder="Brand"
          value={brand}
          listId="brands"
          options={options || []}
          onChange={value =>
            options.includes(value) ? setBrand(value) : console.log(options.includes(value))
          }
        />
      </div>

      <div className="col s12 m6 l4">
        <Datalist
          className="datalistInput"
          listId="page"
          placeholder="Page"
          value={page}
          options={options || []}
          onChange={value =>
            options.includes(value) ? setPage(value) : console.log(options.includes(value))
          }
        />
      </div>
      <div className="col s6 m4 l2">
        <Input
          className="dateInput"
          type="date"
          // value={typeof date}
          max="2020-12-31"
          min="2010-12-31"
          onChange={value => setDate(value)}
        />
      </div>
      <div className="col s6 m4 l2">
        {dateRange === 'range' ? (
          <Input
            className="dateInput"
            type="date"
            // value={toDate}
            max="2020-12-31"
            min="2010-12-31"
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
