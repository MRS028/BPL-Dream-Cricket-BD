import { useEffect, useState } from "react";

const Main = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("./player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  

  return (
    <div className="my-20">
      <div className="flex justify-between mx-24 ">
        <h1 className="font-bold text-3xl text-black">Available Players</h1>
        <div className="join border font-bold rounded text-black border-r-2 border-slate-300">
          <button className="border  p-3 w-[130px] bg-lime-400">
            Available
          </button>
          <button className="border  p-3 w-[130px]">Selected (4)</button>
        </div>
      </div>

      <div className="mx-20 my-10 grid grid-cols-3 space-x-2 gap-y-5">
        {/* card-1 demo */}

        {players.map((player) => (
            
            <div key={player.playerId} className="border  border-b-slate-400-500 rounded-xl bg-base-100 w-96 ">
            <figure className="px-6 pt-6">
              <img
                src={player.image}
                alt=""
                className="rounded-xl w-[400px] h-[225px]"
              />
            </figure>
            <div className="card-body px-6">
              <h2 className="font-bold"><i className="fa-solid fa-user"></i> {player.name}</h2>
              <div className="flex justify-end border-b border-gray-300 pb-5">
                <p className=" opacity-70"><i className="fa-solid fa-flag"></i> {player.country}</p>
                <div className="border rounded text-center w-36"><p className="font-bold opacity-55 font-bold;">{player.role}</p></div>
              </div>
              <div>
                <h1 className="font-bold">Rating</h1>
                <div className="my-5 grid grid-cols-2 justify-end ">
                  <div className="space-y-3">
                    <h1 className="font-bold opacity-55">{player.battingType}</h1>
                    <h1 className="font-bold opacity-55">Price: {player.biddingPrice}</h1>
                  </div>
                  <div className="space-y-3">
                    
                    <h1 className="font-bold opacity-55 px-5 pt-0">{player.bowlingType}</h1>
                    <h1 className="font-bold ">
                      <button className="border text-center hover w-36 p-1 rounded">Choose Player</button>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) )
        
        }
      </div>
    </div>
  );
};

export default Main;
