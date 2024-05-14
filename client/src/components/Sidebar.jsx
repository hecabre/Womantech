import { useState } from "react";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";
import { Button } from "@material-tailwind/react";
function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-l from-shocking-300 to-shocking-500 flex justify-between lg:justify-around md:justify-around items-center z-20 text-shocking-50 py-1 px-3 font-sans font-extralight">
      <img className="w-14 h-14" alt="logo" src="../../public/logo.png" />
      <ul className="flex justify-around gap-0 md:gap-20">
        <li className="hidden md:block lg:block text-lg text-shocking-50 font-semi">
          Home
        </li>
        <li className="hidden md:block lg:block text-lg text-shocking-50 font-semi">
          Movies
        </li>
        <li className="hidden md:block lg:block text-lg text-shocking-50 font-semi">
          Series
        </li>
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

        <p className="text-md bg-shocking-500 px-7 py-2 rounded-full cursor-pointer hidden md:block lg:block font-nunito">
          Login
        </p>
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
          <li className="py-2">Sidebar Link 1</li>
          <li className="py-2">Sidebar Link 2</li>
          <li className="py-2">Sidebar Link 3</li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
