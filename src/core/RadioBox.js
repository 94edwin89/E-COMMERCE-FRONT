import React, {useState, useEffect, Fragment} from "react";


const RadioBox = ({prices, handleFilters}) =>{
  const [value,setValue] = useState(0)

  const handleChange =(event)=>{
        handleFilters(event.target.value)
        setValue(event.target.value)
  }

  return prices.map((p, i) => (
    <div key={i} >
      <input
        onChange={handleChange}
        name={p}
        value={`${p._id}`}
        type="radio"
        className="mr-2 ml-4"
        style={{marginLeft:'32px'}}
      />
      <label className="form-check-label" style={{paddingLeft:'12px'}}>{p.name}</label>
    </div>
  ));
}

export default RadioBox;