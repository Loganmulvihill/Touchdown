import React from "react";
// import SelectFormGroup from "./select-form-group";

const FilterForm = (props) => {
  const { handleTeamChange, handlePositionChange, schools, positions } = props;
  return (
    <form className="col-12 col-md-4">
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
      {/* <div className="form-group d-flex justify-content-between">
        <label
          className="col-4 d-inline text-left"
          htmlfor="exampleFormControlSelect1"
        >
          Weight
        </label>
        <select className="form-control col-8" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div> */}
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
