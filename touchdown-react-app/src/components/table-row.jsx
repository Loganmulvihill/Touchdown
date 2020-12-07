import React from "react";

const TableRow = (props) => {
  const { player } = props;
  return (
    <tr>
      <td>{player.firstName}</td>
      <td>{player.lastName}</td>
      <td>{player.position}</td>
      <td>{player.height}</td>
      <td>{player.weight}</td>
      <td>{player.team}</td>
      <td>{player.college}</td>
    </tr>
  );
};

export default TableRow;
