import React from "react";
import TableHeader from "./table-header";
import TableRow from "./table-row";

const FilteredTable = (props) => {
  const { players } = props;
  return (
    <table class="table table-bordered col-12 col-md-8">
      <thead>
        <tr>
          {/* <TableHeader /> */}
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Position</th>
          <th scope="col">Height</th>
          <th scope="col">Weight</th>
          <th scope="col">Team</th>
          <th scope="col">College</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <TableRow player={player} />
        ))}
      </tbody>
    </table>
  );
};

export default FilteredTable;
