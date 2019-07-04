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
  // console.log(startTime);
  store.setState({ date: startTime });
};

export const setToDate = (store, newToDate) => {
  const endTime = new Date(newToDate).setDate(new Date(newToDate).getDate() + 1);
  console.log(endTime - 1);
  store.setState({ toDate: endTime - 19800001 });
};

export const toggle = store => {
  const toggleValue = !store.state.toggle;
  store.setState({ toggle: toggleValue });
};

export const setLists = (store, lists) => {
  store.setState({ filterLists: lists });
};
