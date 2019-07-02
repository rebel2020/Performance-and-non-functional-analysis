import React from 'react';
import useGlobalHook from './utilities/customHook';

import * as actions from './actions';

const today = new Date();
const initialState = {
  phase: '',
  brand: '',
  page: '',
  date: today.getTime(),
  toDate: '',
  toggle: false,
  filterLists: {
    brand: [],
    phase: [],
    project: [],
    finalUrl: []
  }
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
