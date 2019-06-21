import React from "react";

const Datalist = props => {
  const { name, className, onClick, children } = props;

  return (
   
      <>
  <input list="suburls" name="suburl" placeholder="Enter Suburl"/>
  <datalist id="suburls">
    <option value="Performance"/>
    <option value="Accessibility"/>
    <option value="SEO"/>
    
  </datalist>
  
</>

  );
};

export default Datalist;
