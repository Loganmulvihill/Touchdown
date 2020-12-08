import React from "react";
import TableHeader from "./table-header";
import TableRow from "./table-row";

const FilteredTable = (props) => {
  const { players, filteredPlayers } = props;
  let playerRow = null;
  // let schools = players.map((player) => player.cteam);
  // let uniqueSchools = [...new Set(schools)];
  if (players.length === 0) {
    playerRow = (
      <tr>
        <td>Player data coming shortly</td>
        <td>Player data coming shortly</td>
        <td>Player data coming shortly</td>
        <td>Player data coming shortly</td>
        <td>Player data coming shortly</td>
        <td>Player data coming shortly</td>
        <td>Player data coming shortly</td>
      </tr>
    );
  } else if (filteredPlayers) {
    playerRow = filteredPlayers.map((player) => (
      <TableRow player={player} key={player.player} />
    ));
  } else {
    // console.log(schools);
    // console.log(uniqueSchools);
    // console.log(typeof players);
    playerRow = players.map((player) => (
      <TableRow player={player} key={player.player} />
    ));
  }
  return (
    <table className="table table-bordered col-12 col-md-8">
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
      <tbody>{playerRow}</tbody>
    </table>
  );
};

export default FilteredTable;
