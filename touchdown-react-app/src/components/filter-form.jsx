import React from "react";
import SelectFormGroup from "./select-form-group";

const FilterForm = (props) => {
  const { selectedTitles } = props;
  return (
    <form className="col-12 col-md-4">
      {selectedTitles.map((title) => (
        <SelectFormGroup {...title} />
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FilterForm;
