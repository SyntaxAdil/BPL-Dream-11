import { Lightbulb } from "lucide-react";
import React, { useRef } from "react";
import { usePlayer } from "../../context/PlayerContext";

const Tips = () => {
  const dialogRef = useRef(null);
  const { coin } = usePlayer();

  return (
    <>
      {coin === 0 && (
        <>
          {/* Floating Button */}
          <button
            className="fixed bottom-6 right-6 w-12 h-12 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition cursor-pointer z-20"
            onClick={() => dialogRef.current.showModal()}
          >
            <Lightbulb size={20} />
          </button>

          {/* Modal */}
          <dialog ref={dialogRef} className="modal">
            <div className="modal-box rounded-xl shadow-xl">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                💡 Tips
              </h3>

              <p className="py-2 text-gray-600">
                Claim your free coins to start playing!
              </p>

              <ul className="text-sm text-gray-500 space-y-2 mt-2">
                <li>
                  • When you remove a player, you get 50% of the coins back.
                </li>
                <li>
                  • To reset the app, clear your local storage:
                  <span className="block bg-gray-100 px-2 py-1 rounded mt-1 text-xs">
                    localStorage.clear()
                  </span>
                </li>
              </ul>

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-linear-to-r from-indigo-500 to-pink-500 text-white border-none">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      )}
    </>
  );
};

export default Tips;
