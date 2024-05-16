import { useState } from "react";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-l from-shocking-300 to-shocking-500 flex  justify-between lg:justify-around md:justify-around items-center z-20 text-shocking-50 py-1 px-3 font-sans font-extralight">
      <Link to={"/"}>
        <img
          className="w-14 h-14 hover:cursor-pointer"
          alt="logo"
          src="../logo.png"
        />
      </Link>
      <ul className="flex justify-around gap-0 md:gap-20">
        <Link
          className="hidden md:block lg:block text-lg text-shocking-50 font-semi"
          to={"/universidades"}
        >
          Universidades{import.meta.env.VITE_BACKEND}
        </Link>

        <Link
          className="hidden md:block lg:block text-lg text-shocking-50 font-semi"
          to={"/nosotros"}
        >
          Nosotros
        </Link>
      </ul>

      <div className="flex items-center justify-center gap-5" id="sidebar">
        {sidebarOpen ? (
          <AiOutlineClose
            className="block md:hidden lg:hidden text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <AiOutlineBars
            className="block md:hidden lg:hidden text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        )}
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-gradient-to-tl from-shocking-300 to-shocking-600 backdrop-blur-lg  w-64 p-4 transition-transform duration-300  ease-in-out transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="background"
      >
        {sidebarOpen && (
          <div
            className="absolute top-4 right-4 text-shocking-50 cursor-pointer"
            onClick={toggleSidebar}
          >
            <AiOutlineClose className="text-2xl" />
          </div>
        )}

        <ul className="text-white">
          <img
            className="w-14 h-14 hover:cursor-pointer"
            alt="logo"
            src="../logo.png"
          />
          <Link to={"/universidades"} className="py-2 block text-center hover:bg-shocking-200 transition-all hover:text-shocking-500 hover:font-semibold rounded-lg">
            Universidades
          </Link>

          <Link to={"/nosotros"} className="py-2 block text-center hover:bg-shocking-200 transition-all hover:text-shocking-500 hover:font-semibold rounded-lg">
            Nostros
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
