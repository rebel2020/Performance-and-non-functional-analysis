import React, { useState } from 'react';
import useGlobal from 'src/store';
import Sidebar from '../Sidebar/index';
import GatlingComponent from './Gatling_stats/index';
import searchParams from 'src/utilities/searchParams';
import {setSearch} from './utils/search'

const Gatling = props => {
  const { history } = props;
  const [globalState] = useGlobal();
  const { toggle } = globalState;
  // setSearch(searchParams(history.location.search));
  return (
    <>
      <Sidebar history={history} />
      <div className={toggle ? 'main' : 'main-extend'}><GatlingComponent history={history} /></div>
    </>
  );
};

export default Gatling;
