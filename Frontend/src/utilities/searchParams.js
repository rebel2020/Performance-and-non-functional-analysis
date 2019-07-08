const searchParams = path => {
  const arr = path.substr(1, path.length).split('&');
  const search = {};
  arr.forEach(element => {
    const values = element.split('=');
    const field = values[0];
    const value = values[1];
    search[field] = value;
  });
  return search;
};

export default searchParams;
