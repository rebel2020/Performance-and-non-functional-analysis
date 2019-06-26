export const setEnv = (store, newEnv) => {
  store.setState({ env: newEnv });
};

export const setBrand = (store, newBrand) => {
  store.setState({ brand: newBrand });
};

export const setPage = (store, newPage) => {
  store.setState({ page: newPage });
};

export const setDate = (store, newDate) => {
  store.setState({ date: newDate });
};

export const setToDate = (store, newToDate) => {
  store.setState({ toDate: newToDate });
};

export const toggle = store => {
  const toggle = store.state.toggle ? false : true;
  store.setState({ toggle });
};
