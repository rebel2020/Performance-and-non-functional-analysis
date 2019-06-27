import React from 'react';
import useGlobalHook from './utilities/customHook';

import * as actions from './actions';

const initialState = {
  env: '',
  brand: '',
  page: '',
  date: '',
  toDate: '',
  toggle: false
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
