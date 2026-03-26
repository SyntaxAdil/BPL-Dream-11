import { LucideSettings } from "lucide-react";
import React, { useRef } from "react";
import { usePlayer } from "../../context/PlayerContext";

const Tips = () => {
  const dialogRef = useRef(null);
  const { restartGame } = usePlayer();

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={openModal}
        aria-label="Open tips"
        className="fixed bottom-6 right-6 w-12 h-12 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer z-20"
      >

        <LucideSettings  size={20}  />

      </button>

      {/* Modal */}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box rounded-xl shadow-xl">
          <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
            💡 Pro Tips
          </h3>

          <p className="text-gray-600 mb-3">
            Get the most out of your gameplay with these quick tips:
          </p>

          <ul className="text-sm text-gray-500 space-y-3">
            <li>
              • Start strong by claiming your <span className="font-medium text-gray-700">free coins</span>.
            </li>

            <li>
              • Removing a player refunds <span className="font-medium text-gray-700">50% of the coins</span>, so plan wisely.
            </li>

            <li>
              • Need a fresh start? You can reset your progress anytime:
              <span className="block bg-gray-100 px-2 py-1 rounded mt-2 text-xs font-mono">
                localStorage.clear()
              </span>

              <div className="divider text-xs">OR</div>

              <form method="dialog">
                <button
                  onClick={restartGame}
                  className="btn btn-error hover:text-white btn-soft w-full"
                >
                  Reset Game & Start Fresh
                </button>
              </form>
            </li>
          </ul>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-linear-to-r from-indigo-500 to-pink-500 text-white border-none">
                Got it!
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Tips;