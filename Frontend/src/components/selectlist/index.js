import React from "react";

const Selectlist = props => {
  const { name, className, onClick, children } = props;

  return (
   
      <>
  <select>
  <option value="Website1">Website1</option>
  <option value="Website2">Website2</option>
  <option value="Website3">Website3</option>
  <option value="Website4">Website4</option>
</select>
  
</>

  );
};

export default Selectlist;



