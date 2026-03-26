import NAV_IMAGE from "../../assets/logo.png";
import COIN_IMAGE from "../../assets/DoubleDollar.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePlayer } from "../../context/PlayerContext";
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Fixture", href: "/fixture" },
  { name: "Teams", href: "/teams" },
  { name: "Schedules", href: "/schedules" },
];

const Navbar = () => {
  const { coin } = usePlayer();
  const [open, setOpen] = useState(false);
  const links = NAV_LINKS.map((route) => (
    <li key={route.name} onClick={() => setOpen((p) => !p)}>
      <a
        className="transition-colors duration-150 text-gray-600 hover:text-gray-900"
        href={route.href}
      >
        {route.name}
      </a>
    </li>
  ));

  return (
    <header className="shadow w-full mb-4 fixed bg-white top-0 z-20">
      <nav className="max-w-6xl mx-auto p-2 md:p-4 flex items-center justify-between  px-6 ">
        <div>
          <img src={NAV_IMAGE} alt="LOGO" className="w-10 md:w-full" />
        </div>
        <ul className="hidden md:flex  items-center gap-10 font-medium ">
          {links}
          <button className="px-4 py-2 rounded-md border border-base-300 flex items-center gap-2 ">
            {coin?.toLocaleString()} Coin
            <img src={COIN_IMAGE} alt="Double Dollar" />
          </button>
        </ul>

        <button
          className="btn cursor-pointer hover:bg-[#e7fe29] btn-ghost block md:hidden"
          onClick={() => setOpen((p) => !p)}
        >
          <Menu />
        </button>
      </nav>
      <section
        className={`fixed min-h-screen w-full backdrop-blur-[2px] inset-0 block md:hidden   ${open ? "translate-x-0" : "translate-x-1000"}`}
        onClick={() => setOpen((p) => !p)}
      ></section>
      <aside
        className={`max-w-md w-[80%] bg-white h-full shadow p-6 fixed  z-10 top-0 right-0 block md:hidden transition-all duration-300 ease-in-out  ${open ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <img src={NAV_IMAGE} alt="LOGO" width={60} />
          <button
            className="btn hover:bg-[#e7fe29] btn-ghost"
            onClick={() => setOpen((p) => !p)}
          >
            <X />
          </button>
        </div>
        <ul className="flex flex-col mt-10 items-center  gap-8 font-medium px-2">
          {links}
          <button className="px-4 py-2 rounded-md border border-base-300 flex items-center justify-center w-full gap-2 ">
            {coin?.toLocaleString()} Coin
            <img src={COIN_IMAGE} alt="Double Dollar" />
          </button>
        </ul>
      </aside>
    </header>
  );
};

export default Navbar;
