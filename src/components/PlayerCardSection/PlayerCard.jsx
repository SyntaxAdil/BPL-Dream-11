import { usePlayer } from "../../context/PlayerContext";

function PlayerCard({ player }) {
  const { addChose, chosen } = usePlayer();
  const chosenPlayer = chosen.find((i) => i.id === player.id);
  return (
    <div className="card bg-base-100 rounded-3xl overflow-hidden border border-base-200 mx-auto w-full">
      {/* Player Image */}
      <figure className="relative h-52 overflow-hidden rounded-2xl m-3 mb-0">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover object-top rounded-2xl"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&size=300&background=e2e8f0&color=64748b&font-size=0.33`;
          }}
        />
      </figure>

      <div className="card-body p-4 pt-3 gap-2">
        {/* Name */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center text-base-content/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <h2 className="card-title text-base font-semibold text-base-content">
            {player.name}
          </h2>
        </div>

        {/* Country & Role */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-base-content/60">
            <span className="text-base">🏴</span>
            <span>{player.country}</span>
          </div>
          <span className="badge badge-ghost text-xs font-medium px-3 py-2 rounded-lg">
            {player.role}
          </span>
        </div>

        <div className="divider my-0 opacity-50" />

        {/* Rating */}
        <p className="text-xs font-bold text-base-content uppercase tracking-widest">
          Rating
        </p>
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-base-content">{player.bat}</span>
          <span className="text-base-content/60">{player.bat}</span>
        </div>

        {/* Price & Choose Button */}
        <div className="flex items-center justify-between mt-1">
          <span className="font-semibold text-sm text-base-content">
            Price: ${player.price?.toLocaleString()}
          </span>
          <button
            onClick={() => addChose(player)}
            className={`btn btn-sm rounded-lg px-4 text-xs font-semibold transition-all ${
              chosenPlayer
                ? "btn-success text-white"
                : "btn-ghost border border-base-300 hover:bg-base-200"
            }`}
          >
            {chosenPlayer ? "✓ Chosen" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
