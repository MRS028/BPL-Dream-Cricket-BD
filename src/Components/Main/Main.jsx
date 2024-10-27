/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Players from "./Players";
import SelectedPlayers from "./SelectedPlayers";

const Main = ({ removePlayer, choosePlayer, selectedPlayers }) => {
  const [isAvailable, setIsAvailable] = useState(true);

  const handleAvailable = () => {
    setIsAvailable(true);
  };

  const handleSelected = () => {
    setIsAvailable(false);
  };

  return (
    <div>
      <div className="flex justify-between mx-24">
        <h1 className="font-bold text-3xl text-black">
          {isAvailable
            ? "Available Players"
            : `Selected Players (${selectedPlayers.length} / 6)`}
        </h1>
        <div className="join border font-bold rounded text-black border-r-2 border-slate-300">
          <button
            onClick={handleAvailable}
            className={`border p-2 w-40 ${isAvailable ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={handleSelected}
            className={`border p-2 w-40 ${!isAvailable ? "bg-[#E7FE29]" : ""}`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {/* Render either Players or SelectedPlayers based on isAvailable */}
      {isAvailable ? (
        <Players choosePlayer={choosePlayer} />
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          handleAvailable={handleAvailable}
          selectedPlayers={selectedPlayers}
        />
      )}
    </div>
  );
};

export default Main;
