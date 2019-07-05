import React from 'react';
import useGlobalHook from './utilities/customHook';
import { getDate } from './utilities/timeConversions';
import * as actions from './actions';

const today = new Date();
const initialState = {
  phase: '',
  brand: '',
  page: '',
  date: new Date(getDate(today.getTime(), -1)).getTime(),
  toDate: new Date(getDate(today.getTime(), 1)).getTime() - 1,
  toggle: true,
  filterLists: {
    brand: [],
    phase: [],
    project: [],
    finalUrl: []
  }
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
