const formatString = string => {
  return string
    .replace(/_/g, ' ')
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
};

export default formatString;
