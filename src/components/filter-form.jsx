import React from "react";
// import SelectFormGroup from "./select-form-group";

const FilterForm = (props) => {
  const {
    handleTeamChange,
    handlePositionChange,
    schools,
    positions,
    onSubmit,
  } = props;
  return (
    <form className="col-12 col-md-4" onSubmit={onSubmit}>
      <div className="form-group d-flex justify-content-between">
        <label
          className="col-4 d-inline text-left"
          htmlfor="exampleFormControlSelect1"
        >
          Team
        </label>
        <select
          className="form-control col-8"
          id="exampleFormControlSelect1"
          onChange={handleTeamChange}
        >
          {schools.map((school) => (
            <option>{school}</option>
          ))}
        </select>
      </div>
      <div className="form-group d-flex justify-content-between">
        <label
          className="col-4 d-inline text-left"
          htmlfor="exampleFormControlSelect1"
        >
          Position
        </label>
        <select
          className="form-control col-8"
          id="exampleFormControlSelect1"
          onChange={handlePositionChange}
        >
          {positions.map((position) => (
            <option>{position}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FilterForm;

// const FilterForm = (props) => {
//   const { selectedTitles, handleTeamChange } = props;
//   return (
//     <form className="col-12 col-md-4">
//       {selectedTitles.map((title) => (
//         <SelectFormGroup {...title} />
//       ))}
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// };
