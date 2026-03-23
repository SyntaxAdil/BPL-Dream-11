import React from "react";
import { usePlayer } from "../../context/PlayerContext";
import { TrashIcon } from "lucide-react";

const SelectedPlayerCard = ({ player }) => {
  const { onRemove } = usePlayer();
  return (
    <div className="flex items-center justify-between bg-white rounded-xl px-4 py-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0">
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        {/* Info */}
        <div>
          <p className="text-sm font-semibold text-gray-900">{player.name}</p>
          <p className="text-xs text-gray-400 mt-0.5">{player.bat}</p>
        </div>
      </div>

      {/* Delete button */}
      <button
        onClick={() => onRemove(player)}
        className="text-red-400 hover:text-red-600 transition-colors duration-150 p-1.5 rounded-lg hover:bg-red-50 cursor-pointer"
      >
        <TrashIcon />
      </button>
    </div>
  );
};

export default SelectedPlayerCard;
