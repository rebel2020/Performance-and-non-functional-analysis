import React, { useState, useEffect, Fragment } from 'react';
import SelectList from 'src/components/selectlist';
import Input from 'src/components/Input';
import { getHtmlDate } from 'src/utilities/timeConversions';
import { search } from '../utils/search';
import { LIST } from '../graphql/Queries';
import { parseFilterData } from '../utils/fetchUrl';
import 'src/main.scss';
import FetchData from 'src/components/graphql/utils';
import searchParams from '../../../utilities/searchParams';
const Filters = props => {
  const { dateRange, history,flagFilter } = props;
  const [query, setQuery] = useState(<></>);
  const [list, setList] = useState();
  const [filterLists, setFilterList] = useState({
    phase: [],
    brand: [],
    finalUrl: []
  });
  const [dates, setDates] = useState({
    date: getHtmlDate(Date.now() - 864e5),
    toDate: getHtmlDate(new Date().getTime())
  });
  const [values, setValues] = useState({
    phase: '',
    brand: '',
    finalUrl: '',
    track: '',
    type: '',
    date: Date.now() - 864e5,
    toDate: new Date().getTime()
  });
  let searchValues = searchParams(history.location.search);
  useEffect(() => {
    setQuery(FetchData(LIST, setList));
    history.push({
      pathname: history.pathname,
      search: search({ ...values })
    });
  }, []);
  if(props.finalUrl !== values.page){
    setValues({...values,page:props.finalUrl})
  }

  let newValue = parseFilterData(list);
  if (JSON.stringify(filterLists) !== JSON.stringify(newValue)) {
    setFilterList(newValue);
  }
  let filter = <></>
  if(!flagFilter){
    filter = <Fragment> 
    <div className="col s6 m3 l2">
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
              search: search({ ...values, phase: value })
            });
          }
        }}
      />
    </div>
    <div className="col s6 m3 l2">
      <SelectList
        className="datalistInput"
        listId="Track"
        placeholder="Track"
        value=""
        options={['SDP', 'CR', 'Fleet']}
        onChange={value => {
          setValues({ ...values, track: value });
          // if (filterLists.finalUrl.includes(value)) {
          //   history.push({
          //     pathname: history.pathname,
          //     search: search({ ...values, page: value })
          //   });
          // }
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
            history.push({
              pathname: history.pathname,
              search: search({ ...values, brand: value })
            });
          }
        }}
      />
    </div>
    <div className="col s6 m3 l2">
      <SelectList
        className="datalistInput"
        listId="page"
        placeholder="Page"
        value=""
        options={['Prod', 'Comp']}
        onChange={value => {
          setValues({ ...values, type: value });
          // if (filterLists.finalUrl.includes(value)) {
          //   history.push({
          //     pathname: history.pathname,
          //     search: search({ ...values, page: value })
          //   });
          // }
        }}
      />
    </div>

</Fragment>
  } else{  
    let newList;
    if(searchValues.brand){
      newList = filterLists.finalUrl.filter((obj,i)=>{
        return (obj.includes(searchValues.brand))
      });
      newList.unshift("All");
      console.log(newList);
    }
    filter =  <Fragment> 
    <div className="col m7">
      <SelectList
        className="datalistInput"
        placeholder="Urls"
        value={values.finalUrl}
        listId="Url"
        options={(newList)?newList:filterLists.finalUrl}
        onChange={value => {
          setValues({ ...values, page: value });
          if (filterLists.finalUrl.includes(value)) {
            history.push({
              pathname: history.pathname,
              search: search({ ...values, page: value })
            });
          }
        }}
      />
    </div>

  </Fragment>
  }
return (
    <Fragment>
      <div className="filters text-center">
        {filter}
        <div className="col s6 m4 l2">
          <Input
            className="dateInput"
            type="date"
            value={dates.date}
            max={getHtmlDate(new Date().getTime())}
            min="2019-07-01"
            onChange={value => {
              setDates({ ...dates, date: value });
              setValues({ ...values, date: value ? new Date(value).getTime() : value });
              history.push({
                pathname: history.pathname,
                search: search({ ...values, date: value ? new Date(value).getTime() : value })
              });
            }}
          />
        </div>
        <div className="col s6 m4 l2">
          {dateRange === 'range' ? (
            <Input
              className="dateInput"
              type="date"
              value={dates.toDate}
              max={getHtmlDate(new Date().getTime())}
              min="2019-07-01"
              onChange={value => {
                setDates({ ...dates, toDate: value });
                setValues({ ...values, toDate: value ? new Date(value).getTime() : value });
                history.push({
                  pathname: history.pathname,
                  search: search({
                    ...values,
                    toDate: value ? new Date(value).getTime() : value
                  })
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
