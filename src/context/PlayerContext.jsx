/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
const PlayerContextApi = createContext(null);
export const usePlayer = () => useContext(PlayerContextApi);
import toast from "react-hot-toast";
import useLocalStorage from "./../components/hooks/useLocalStorage";

const fetchPlayer = fetch("/playerData.json").then((res) => res.json());
const PlayerContext = ({ children }) => {
  const [chosen, setChosen] = useLocalStorage("chosen", []);
  const [coin, setCoin] = useLocalStorage("coin", 0);
  const [claimCoin, setClaimCoin] = useLocalStorage("claimCoin", false);
  const [selectDeleteItem, setSelectDeleteItem] = useState(null);
  const addChose = (item) => {
    setChosen((prev) => {
      if (prev.find((i) => i.id === item.id)) {
        // alert("Canot add same player");
        toast.error("Player already added!");
        return prev;
      }
      if (prev.length >= 6) {
        toast.error("Can't add more than 6 players!");
        // alert("Cannot select more than 6 players");
        return prev;
      }

      setCoin((p) => {
        if (p >= item.price) {
          toast.success(
            `${item.name.split(" ").slice(0, 1)} added Successfully!`,
          );
          return p - parseInt(item.price);
        } else {
          toast.error(
            `You don't have enought coin to choose ${item.name.split(" ").slice(0, 1)}!`,
          );
          return 0;
        }
      });

      if (coin >= item.price) {
        return [...prev, { ...item }];
      }
      return prev;
    });
  };
  const onRemove = (item) => {
    setSelectDeleteItem(item);
  };

  const confirmDlt = () => {
    if (!selectDeleteItem) return;
    toast.success(
      `${selectDeleteItem.name.split(" ").slice(0, 1)} removed Successfully and receive ${parseInt(selectDeleteItem.price) * 0.5}!`,
    );
    setChosen((prev) => prev.filter((i) => i.id !== selectDeleteItem.id));
    setCoin((p) => p + parseInt(selectDeleteItem.price) * 0.5);

    setSelectDeleteItem(null);
  };

  const claimFreeCoin = () => {
    toast.success(`Congratulations! You got 5,000,000 coins!`);
    setCoin(5000000);
    setClaimCoin(true);
  };
  const restartGame = () => {
    setChosen([]);
    setCoin(0);
    setClaimCoin(false);
    toast.success("Initiating from the beginning.")

    
  };
  const value = {
    fetchPlayer,
    addChose,
    chosen,
    onRemove,
    coin,
    claimFreeCoin,
    claimCoin,
    confirmDlt,
    restartGame
  };
  return (
    <PlayerContextApi.Provider value={value}>
      {children}
    </PlayerContextApi.Provider>
  );
};

export default PlayerContext;
