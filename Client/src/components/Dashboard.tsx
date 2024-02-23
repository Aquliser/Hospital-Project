import { ChangeEvent, useState } from 'react';
import Sidebar from './shared/sidebar';
import Navbar from './shared/Navbar';
import LineChart from './shared/linechart';


function Layout() {
  const [searchDate, setSearchDate] = useState('');
  const [searchOption, setSearchOption] = useState('');

  const handleSearchDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchDate(event.target.value);
  };

  const handleSearchOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchOption(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching...');
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1 p-4 pr-16">
          <div className="flex flex-wrap mb-5">
            <div className="w-full md:w-1/3 px-2">
              <input
                id="searchDate"
                type="text"
                placeholder="Search Date"
                value={searchDate}
                onChange={handleSearchDateChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
              />
            </div>

            <div className="w-full md:w-1/3 px-2">
              <select
                id="searchOption"
                value={searchOption}
                onChange={handleSearchOptionChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
              >
                <option value="">Search Hospital</option>
                <option value="hospital1">hospital1</option>
                <option value="hospital2">hospital2</option>
                {/* Add more search options if needed */}
              </select>
            </div>

            <div className="w-full md:w-1/3 px-2 flex justify-end">
              <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                Search
              </button>
            </div>
          </div>
          <LineChart />
        </main>
      </div>
    </div>
  );
}

export default Layout;
