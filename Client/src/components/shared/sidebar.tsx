import { Link } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { PiChartLineUpThin } from "react-icons/pi";
import { PiChartLineDownThin } from "react-icons/pi";
import { MdMarkChatUnread } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="bg-white border border-gray text-gray h-full w-64 flex-shrink-0 flex flex-col">
  <div className="relative ml-8 mt-8">
    <div className="flex  text-blue-500 w-full">
      <span>Transfer</span> 
      <span>Patient</span>
    </div>
  </div>
  
  <div className="relative">
  <div className="text-blue-500 font-bold text-lg">
    T
  </div>
  <div className="text-blue-500 font-bold text-lg mx-2">
    P
  </div>
  </div>
  <nav>
    <ul className="flex flex-col items-right justify-center m-8">
      <li>
          <Link to="./Dashboard" className="text-gray-500 border-none rounded-lg p-4 hover:bg-blue-700 hover:text-white cursor-pointer flex items-center">
          <MdHomeFilled />
          <span className="ml-2">Dashboard</span>
          </Link>
      </li>     
      <li className="text-gray-500 border-none rounded-lg p-4 hover:bg-blue-700 hover:text-white cursor-pointer flex items-center">
        <PiChartLineDownThin />
        <span className="ml-2">Refer In</span>
      </li>
      <li className="text-gray-500 border-none rounded-lg p-4 hover:bg-blue-700 hover:text-white cursor-pointer flex items-center">
        <PiChartLineUpThin />
        <span className="ml-2">Refer Out</span>
      </li>
      <li className="text-gray-500 border-none rounded-lg p-4 hover:bg-blue-700 hover:text-white cursor-pointer flex items-center">
        <MdMarkChatUnread />
        <span className="ml-2">Chat</span>
      </li>
      <li>
      <Link to="./login" className="text-gray-500 border-none rounded-lg p-4 hover:bg-blue-700 hover:text-white cursor-pointer flex items-center">
        <LuLogOut />
        <span className="ml-2">Log Out</span>
        </Link>
      </li>
    </ul>
  </nav>
</div>

  );
};

export default Sidebar;
