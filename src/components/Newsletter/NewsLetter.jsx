import HERO_BG_IMAGE from "../../assets/bg-shadow.png";

const NewsLetter = ({extraClass}) => {
  return (
    <section className={`p-4 max-w-5xl mx-auto  rounded-3xl border border-white ${extraClass}`}>
      <div
        className="rounded-3xl py-15 bg-no-repeat bg-center bg-cover min-h-52 flex items-center justify-center bg-white"
        style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-900">
            Subscribe to our Newsletter
          </h1>

          {/* Subtext */}
          <p className="text-sm text-gray-500">
            Get the latest updates and news right in your inbox!
          </p>

          {/* Input + Button Row */}
          <div className="flex items-center gap-2 mt-1 w-full min-w-md ">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 shadow-sm"
            />
            <button className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 hover:opacity-90 transition-opacity shadow-md whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
