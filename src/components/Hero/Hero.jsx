import HERO_BG_IMAGE from "../../assets/bg-shadow.png";
import HERO_MAIN_IMAGE from "../../assets/banner-main.png";

const Hero = () => {
  return (
    <section
      className="rounded-3xl p-8 bg-no-repeat bg-center bg-cover bg-black min-h-136 mt-2"
      style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
    >
      <div className="flex items-center justify-center w-full h-full p-8">
        <div className="text-center space-y-8">
            <img src={HERO_MAIN_IMAGE} alt="Hero main image"  className="mx-auto" />
            <h1 className="text-base-100 font-bold text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-xl text-base-300" >Beyond Boundaries Beyond Limits</p>

            <div className="border border-yellow-200 p-2 rounded-2xl w-50 mx-auto" >
                <button className="bg-yellow-200 btn w-full rounded-xl font-medium text-black text-md">
                    Claim Free Credit

                </button>

            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
