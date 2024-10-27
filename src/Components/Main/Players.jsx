/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const Players = ({ choosePlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("./player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="my-20">
      <div className="mx-20 my-10 grid grid-cols-1 lg:grid-cols-3 space-x-2 gap-y-5">
        {players.map((player) => (
          <div
            key={player.playerId}
            className="border border-b-slate-400-500 rounded-xl bg-base-100 w-96"
          >
            <figure className="px-6 pt-6">
              <img
                src={player.image}
                alt=""
                className="rounded-xl w-[400px] h-[225px]"
              />
            </figure>
            <div className="card-body px-6">
              <h2 className="font-bold">
                <i className="fa-solid fa-user"></i> {player.name}
              </h2>
              <div className="flex justify-end border-b border-gray-300 pb-5">
                <p className="opacity-70 pt-1">
                  <i className="fa-solid fa-flag"></i> {player.country}
                </p>
                <div className="border bg-slate-100 rounded text-center p-1">
                  <p className="font-bold opacity-55 font-bold;">
                    {player.role}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                <h1 className="font-bold">Rating</h1>
                <h1 className="font-bold">{player.rating}/10</h1>


                </div>
                
                <div className="my-5 space-y-5 ">
                  <div className="flex justify-between">
                    <h1 className="font-bold ">
                      {player.battingType}
                    </h1>
                    <h1 className="font-bold opacity-55 ">
                      {player.bowlingType}
                    </h1>
                    
                  </div>
                  <div className=" flex justify-between">
                  <h1 className="pt-1 font-bold">
                      Price: ${player.biddingPrice}
                    </h1>

                    <h1 className="font-bold ">
                      <button
                        onClick={() => choosePlayer(player)}
                        className="border text-[#131313] text-center hover w-36 p-1 rounded transition-shadow duration-200 ease-linear hover:bg-lime-300"
                      >
                        Choose Player
                      </button>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
