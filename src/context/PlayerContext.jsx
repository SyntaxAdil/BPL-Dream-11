import { createContext, useContext, useState } from "react";
const PlayerContextApi = createContext(null);
export const usePlayer = () => useContext(PlayerContextApi);

const fetchPlayer = fetch("/playerData.json").then((res) => res.json());
const PlayerContext = ({ children }) => {
  const [chosen, setChosen] = useState([]);
  const addChose = (item) => {
    setChosen((prev) => {
      if (prev.find((i) => i.id === item.id)) {
        // alert("Canot add same player");
        return prev;
      }
      if (prev.length >= 6) {
        // alert("Cannot select more than 6 players");
        return prev;
      }
      return [...prev, { ...item }];
    });
  };
  const onRemove=(id) => { 
    setChosen(prev=>prev.filter(i=>i.id!==id))
   }

  const value = { fetchPlayer, addChose, chosen,onRemove };
  return (
    <PlayerContextApi.Provider value={value}>
      {children}
    </PlayerContextApi.Provider>
  );
};

export default PlayerContext;
