import React from "react";

const TableRow = (props) => {
  const { player } = props;
  return (
    <tr>
      <td>{player.fname}</td>
      <td>{player.lname}</td>
      <td>{player.pos1}</td>
      <td>{player.height}</td>
      <td>{player.weight}</td>
      <td>{player.cteam}</td>
      <td>{player.col}</td>
    </tr>
  );
};

export default TableRow;
