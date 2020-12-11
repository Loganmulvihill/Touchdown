import React from "react";
import SelectChoice from "./select-choice";

const SelectFormGroup = (props) => {
  let titleProps = { ...props };
  return (
    <div
      className="form-group d-flex justify-content-between"
      key={titleProps.id}
    >
      <label
        className="col-4 d-inline text-left"
        htmlfor="exampleFormControlSelect1"
      >
        {titleProps.title}
      </label>
      <select className="form-control col-8" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
};

export default SelectFormGroup;
