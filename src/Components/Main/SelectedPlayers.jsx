/* eslint-disable react/prop-types */
import React from "react";

const SelectedPlayers = ({ removePlayer, handleAvailable, selectedPlayers }) => {
  return (
    <section>
      {selectedPlayers.length === 0 ? (
        ""
      ) : (
        <div>
          {selectedPlayers.map((player, index) => (
            <div
              key={index}
              className="flex justify-between mx-auto w-[95%]  shadow-xl p-5 lg:mx-24 my-8 lg:w-[1366px] border rounded"
            >
              <div className="flex items-center gap-6">
                <img className="border w-20 h-20 rounded-full" src={player.image} alt="" />
                <div>
                  <h1 className="font-semibold lg:text-2xl">{player.name} </h1>
                  <p className="font-semibold opacity-60">{player.role}</p>
                  <p className="font-semibold opacity-60">price: ${player.biddingPrice}</p>
                </div>
                
              </div>
                <button
                  onClick={() => removePlayer(player)}
                  className="btn my-5 bg-transparent text-white px-3 py-1 rounded"
                >
                  <i className=" fa-solid fa-trash-can fa-xl" style={{ color: "#e00b0b" }}></i>
                 
                 
                </button>
              
            </div>
          ))}
        </div>
      )}

      <div className="mx-11 lg:mx-0 lg:px-24 my-32 pb-10">
        <button
          onClick={handleAvailable}
          className="btn relative  h-auto inline-block text-xl rounded-md bg-[#E7FE29] text-black font-bold"
        >
          Add More Players
        </button>
      </div>
    </section>
  );
};

export default SelectedPlayers;
