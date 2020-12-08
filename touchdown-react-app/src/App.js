import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import FilterForm from "./components/filter-form";
import FilteredTable from "./components/filtered-table";

function App() {
  const selectedInputTitles = [
    { id: 1, title: "Team" },
    { id: 2, title: "Position" },
    { id: 3, title: "Height" },
    { id: 4, title: "Weight" },
  ];

  const fakePlayers = [
    {
      firstName: "John",
      lastName: "Smith",
      position: "WR",
      height: 69,
      weight: 205,
      team: "Rams",
      college: "Kansas",
    },
    {
      firstName: "Jack",
      lastName: "Swein",
      position: "TE",
      height: 55,
      weight: 180,
      team: "Colts",
      college: "Kansas",
    },
    {
      firstName: "Will",
      lastName: "Jamison",
      position: "QB",
      height: 60,
      weight: 195,
      team: "Chargers",
      college: "Kansas",
    },
    {
      firstName: "Peyton",
      lastName: "Manning",
      position: "QB",
      height: 65,
      weight: 200,
      team: "Colts",
      college: "Kansas",
    },
  ];
  const [selected, setSelected] = useState(selectedInputTitles);
  const [playerArray, setPlayers] = useState([]);
  const [team, setTeam] = useState(null);
  const [position, setPosition] = useState(null);
  const [filteredArray, setfilteredPlayers] = useState(null);

  const handleTeamChange = (e) => {
    setTeam(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredPlayers = playerArray.filter(
      (player) => player.cteam === team && player.pos1 === position
    );

    setfilteredPlayers(filteredPlayers);
    console.log(filteredPlayers);
  };
  // let filterChoices = []

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.armchairanalysis.com/v1.1/test/players?status=active"
    )
      .then((response) => response.json())
      .then((data) => setPlayers(data.data));
  }, [playerArray]);

  let schools =
    playerArray.length === 0 ? "1" : playerArray.map((player) => player.cteam);
  // let schools = players.map((player) => player.cteam);
  let uniqueSchools = [...new Set(schools)];

  let positions =
    playerArray.length === 0
      ? "1"
      : playerArray.map((position) => position.pos1);
  let uniquePositions = [...new Set(positions)];

  return (
    <div className="App">
      <Navbar />
      <div className="col-12 d-flex pl-2 pr-2 pt-5">
        <FilterForm
          handleTeamChange={handleTeamChange}
          handlePositionChange={handlePositionChange}
          onSubmit={handleSubmit}
          selectedTitles={selected}
          schools={uniqueSchools}
          positions={uniquePositions}
        />
        <FilteredTable filteredPlayers={filteredArray} players={playerArray} />
      </div>
    </div>
  );
}

export default App;
