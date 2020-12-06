import React from "react";
import TableHeader from "./table-header";
import TableRow from "./table-row";

const FilteredTable = (props) => {
  return (
    <table class="table table-bordered col-12 col-md-8">
      <thead>
        <tr>
          <TableHeader />
        </tr>
      </thead>
      <tbody>
        <TableRow />
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FilteredTable;
