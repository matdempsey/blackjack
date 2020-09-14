import React from "react";
import PlayingTable from "./playing-table/PlayingTable.js";
import { getShuffledDeck } from ".././actions/shuffle.js";

import "./App.css";

const App = () => {
  const shuffledDeck = getShuffledDeck();

  return (
    <div className="App">
      <main>
        <PlayingTable deck={shuffledDeck} />
      </main>
    </div>
  );
};

export default App;
