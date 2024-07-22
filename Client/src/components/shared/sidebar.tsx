import { Link} from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { PiChartLineUpThin } from "react-icons/pi";
import { PiChartLineDownThin } from "react-icons/pi";
import { MdMarkChatUnread } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";

const Sidebar = () => {

  return (
        <nav className="w-16 md:w-56 bg-white border border-gray text-gray h-full flex-shrink-0 flex flex-col">
          <div className="relative ml-8 mt-8">
            <div className="flex text-blue-500 w-full">
              <span>Transfer</span>
              <span>Patient</span>
            </div>
          </div>
          <div className="relative">
            <div className="text-blue-500 font-bold text-lg">T</div>
            <div className="text-blue-500 font-bold text-lg mx-2">P</div>
          </div>
          <div>
            <ul className="flex flex-col w-12 md:w-40 items-right justify-center m-2 md:m-8">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 border-none rounded-full sm:rounded-lg p-4 hover:bg-blue-700 hover:text-white cursor-pointer flex items-center">
                  <MdHomeFilled />
                  <span className="ml-2 md:block hidden">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                to="/History"
              className="text-gray-500 border-none rounded-full sm:rounded-lg p-4 hover:bg-blue-700 hover:text-white cursor-pointer flex items-center"
                >
                <FaClipboardList />
                  <span className="ml-2 md:block hidden">เวชระเบียบ</span>
                  </Link>
              </li>
              <li className="text-gray-500 border-none rounded-full sm:rounded-lg p-4 hover:bg-blue-700 hover:text-white cursor-pointer flex items-center">
                <PiChartLineDownThin />
                <span className="ml-2 md:block hidden">Refer In</span>
              </li>
              <li className="text-gray-500 border-none rounded-full sm:rounded-lg p-4 hover:bg-blue-700 hover:text-white cursor-pointer flex items-center">
                <PiChartLineUpThin />
                <span className="ml-2 md:block hidden">Refer Out</span>
              </li>
              <li className="text-gray-500 border-none rounded-full sm:rounded-lg p-4 hover:bg-blue-700 hover:text-white cursor-pointer flex items-center">
                <MdMarkChatUnread />
                <span className="ml-2 md:block hidden">Chat</span>
              </li>
              <li>
                <Link
                  to="/Login"
                  className="text-gray-500 border-none rounded-full sm:rounded-lg p-4 hover:bg-blue-700 hover:text-white cursor-pointer flex items-center"
                >
                  <LuLogOut />
                  <span className="ml-2 md:block hidden">Log Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
  );
};

export default Sidebar;