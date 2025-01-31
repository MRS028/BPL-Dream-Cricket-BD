import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from './Components/Footer/Footer'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const App = () => {
  const [coinBalance, setCoinBalance] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Claim button function
  function handlecCoin() {
    setCoinBalance(coinBalance + 20000000);
    toast.success("Congrats! Claimed 20000000 coins!");
  }

  // Choose Player function
  const choosePlayer = (player) => {
    const biddingPrice = Number(player.biddingPrice);
    const playerName = player.name;

    // Check if the maximum number of players (6) has been reached
    if (selectedPlayers.length >= 6) {
      toast.error("You can select a maximum of 6 players!");
      return;
    }

    // Check if the player is already selected
    const isPlayerSelected = selectedPlayers.some(
      (selectedPlayer) => selectedPlayer.name === playerName
    );

    if (isPlayerSelected) {
      toast.error(`${player.name} has already selected!`);
      return;
    }

    if (coinBalance >= biddingPrice) {
      setCoinBalance((prevBalance) => prevBalance - biddingPrice);
      setSelectedPlayers((prevSelected) => [...prevSelected, player]);
      toast.success(`Congrats! ${playerName} is now in your squad.`);
    } else {
      toast.error("Not enough coins to buy this player.Claim some credit.");
    }
  };

  // Remove Player function
  const removePlayer = (player) => {
    // Add the removed player's bidding price back to the coin balance
    setCoinBalance((prevBalance) => prevBalance + Number(player.biddingPrice));

    // Filter out the player from the selectedPlayers list
    setSelectedPlayers((prevSelected) =>
      prevSelected.filter((selectedPlayer) => selectedPlayer.name !== player.name)
    );

    toast.info(`${player.name} removed from your squad.`);
  };

  return (
    <div>
      {/* Header */}
      <Header coinBalance={coinBalance} handlecCoin={handlecCoin} />

      {/* Main Section */}

      <Main
        removePlayer={removePlayer}
        selectedPlayers={selectedPlayers}
        choosePlayer={choosePlayer}
        coinBalance={coinBalance}
      />

      {/* Footer */}
      <Footer></Footer>

      {/* Toast Notification */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
