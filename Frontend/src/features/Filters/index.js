import React from 'react';
import Datalist from 'src/components/datalist';
import SelectList from 'src/components/selectlist';
import Input from 'src/components/Input';
import useGlobal from 'src/store';
import './main.scss';

const Filters = props => {
  const [globalState, globalActions] = useGlobal();
  const { setPage, setDate, setToDate, setBrand, setEnv, setPagecomp } = globalActions;
  const { date, options } = props;
  // console.log(options);
  return (
    <div className="row filters">
      <div className="col s12 m6 l4">
        Select ENV
        <br />
        <SelectList label="Choose ENV" options={[]} onChange={value => setEnv(value)} />
      </div>
      <div className="col s12 m6 l4">
        Select brand
        <br />
        <SelectList options={[]} onChange={value => setBrand(value)} />
      </div>

      <div className="col s12 m6 l4">
        <Datalist
          className="float-right"
          listId="urls"
          placeholder="urls"
          options={options || []}
          onChange={value =>
            options.includes(value) ? setPage(value) : console.log(options.includes(value))
          }
        />
      </div>
      <div className="col s6 m2 l2">
        <Input
          className="float-right"
          type="date"
          max="2020-12-31"
          min="2010-12-31"
          onChange={value => setDate(value)}
        />
      </div>
      <div className="col s6 m2 l2 center">
        {date === 'range' ? (
          // <div className="col s6 m3 l4 center">
          <Input
            className="float-left"
            type="date"
            max="2020-12-31"
            min="2010-12-31"
            onChange={value => setToDate(value)}
          />
        ) : (
          // </div>
          <></>
        )}
      </div>
      {/* <div className="col s6 m3 l4 center">
        <Input type="date" max="2020-12-31" min="2010-12-31" />
      </div> */}
    </div>
  );
};
export default Filters;
