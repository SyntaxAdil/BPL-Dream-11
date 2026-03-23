import React from "react";
import { usePlayer } from "../../context/PlayerContext";

const Dlt = () => {
  const { openDltPopup,confirmDlt,setOpenDltPopup } = usePlayer();

  return (
    <>
      {openDltPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-sm p-6 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-500 text-2xl">
              🗑️
            </div>

            <h2 className="text-lg font-bold mt-4">Delete Player?</h2>

            <p className="text-sm text-gray-500 mt-2">
              Are you sure you want to remove this player? You will get 50%
              coins back.
            </p>

            <div className="flex gap-3 mt-6">
              <button
                // onClick={onClose}
                className="w-full py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                onClick={()=>setOpenDltPopup(p=>!p)}
              >
                Cancel
              </button>

              <button
                onClick={confirmDlt}
                className="w-full py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dlt;
