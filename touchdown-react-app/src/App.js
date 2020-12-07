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
    // { id: 5, title: "Weeks" },
    // { id: 6, title: "Game Type" },
    // { id: 7, title: "Coach" },
  ];
  const [selected, setSelected] = useState(selectedInputTitles);
  const [playerArray, setPlayers] = useState([]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.armchairanalysis.com/v1.1/test/players?status=active"
    )
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, [playerArray]);

  return (
    <div className="App">
      <Navbar />
      <div className="col-12 d-flex pl-2 pr-2 pt-5">
        <FilterForm selectedTitles={selected} />
        <FilteredTable />
      </div>
    </div>
  );
}

export default App;

// "https://cors-anywhere.herokuapp.com/https://api.armchairanalysis.com/v1.1/test/players?count=25&start=26";
