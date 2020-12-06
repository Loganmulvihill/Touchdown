import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import FilterForm from "./components/filter-form";
import FilteredTable from "./components/filtered-table";

function App() {
  const selectedInputTitles = [
    { id: 1, title: "Team" },
    { id: 2, title: "Unit" },
    { id: 3, title: "Opponent" },
    { id: 4, title: "Season" },
    { id: 5, title: "Weeks" },
    { id: 6, title: "Game Type" },
    { id: 7, title: "Coach" },
  ];
  const [selected, setSelected] = useState(selectedInputTitles);
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
