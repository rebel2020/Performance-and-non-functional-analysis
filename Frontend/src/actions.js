export const setEnv = (store, newPhase) => {
  store.setState({ phase: newPhase === 'All' ? '' : newPhase });
};

export const setBrand = (store, newBrand) => {
  store.setState({ brand: newBrand === 'All' ? '' : newBrand });
};

export const setPage = (store, newPage) => {
  store.setState({ page: newPage === 'All' ? '' : newPage });
};

export const setDate = (store, newDate) => {
  const startTime = new Date(newDate).getTime();
  store.setState({ date: startTime });
};

export const setToDate = (store, newToDate) => {
  const endTime = new Date(newToDate).setDate(new Date(newToDate).getDate() + 1);
  store.setState({ toDate: endTime });
};

export const toggle = store => {
  const toggleValue = !store.state.toggle;
  store.setState({ toggle: toggleValue });
};
