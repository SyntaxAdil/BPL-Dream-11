import { use, useState } from "react";
import { usePlayer } from "../../context/PlayerContext";
import PlayerCard from "./PlayerCard";
import SelectedPlayerCard from "./SelectedPlayerCard";

export const PlayerCardSection = () => {
  const { fetchPlayer, chosen } = usePlayer();
  const player = use(fetchPlayer);

  const [selectCategory, setSelectCategory] = useState("available");
  const selectedClass = "bg-[#e7fe29] text-black";

  return (
    <section className="my-20">
      {/* header logic */}
      <header className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 items-center">
        <div>
          <h1 className="text-2xl font-bold">
            {selectCategory === "available"
              ? "Available Players"
              : `Selected Player (${chosen.length}/6)`}
          </h1>
        </div>
        <div>
          <div className="border border-base-300 flex items-center w-fit rounded-md font-semibold  overflow-hidden md:ms-auto">
            <button
              className={`cursor-pointer w-full px-8 py-2 ${
                selectCategory === "available"
                  ? selectedClass
                  : "bg-transparent text-neutral-400"
              } `}
              onClick={() => setSelectCategory("available")}
            >
              Available
            </button>
            <button
              className={`cursor-pointer w-full px-8 py-2 ${
                selectCategory === "selected"
                  ? selectedClass
                  : "bg-transparent text-neutral-400"
              } flex items-center gap-2 `}
              onClick={() => setSelectCategory("selected")}
            >
              Selected <span>({chosen.length})</span>
            </button>
          </div>
        </div>
      </header>

      {selectCategory === "available" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {player.map((p, idx) => (
            <PlayerCard player={p} key={p.id || idx} />
          ))}
        </div>
      ) : (
        <div className="space-y-6 mt-10">
          {chosen.map((c, idx) => (
            <SelectedPlayerCard player={c} key={c.id || idx} />
          ))}
        </div>
      )}

      {player.length === 0 ||
        (selectCategory === "selected" && chosen.length === 0 && (
          <p className="text-center my-8 text-2xl text-black/30">
            No player found.
          </p>
        ))}
    </section>
  );
};
