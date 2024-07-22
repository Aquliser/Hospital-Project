import { ChangeEvent, useState } from 'react';
import Sidebar from './shared/sidebar';
import Navbar from './shared/Navbar';
import LineChart from './shared/linechart';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaVanShuttle } from "react-icons/fa6";
import { FaWheelchair } from "react-icons/fa6";

function Dashboard() {
  const [searchDate, setSearchDate] = useState('');
  const [searchOption, setSearchOption] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const datareferin = "20";
  const referin = "100";
  const datareferout =  "20";
  const referout = "100";   

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

  const handleApplyFilter = () => {
    // Implement filter logic based on selected start and end dates
    console.log('Applying filter...');
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
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
        <main className="flex-1 p-4 md:8">
          <div className="flex flex-wrap mb-5">
            <div className="w-2/6 md:w-1/3 px-2">
              <input
                id="searchDate"
                type="date"
                placeholder="Search Date"
                value={searchDate}
                onChange={handleSearchDateChange}
                className="mt-1 h-6 md:h-full p-2 w-full bg-blue-100 rounded-md placeholder-black"
              />
            </div>

            <div className="w-2/6 md:w-1/3 px-2">
              <select
                id="searchOption"
                value={searchOption}
                onChange={handleSearchOptionChange}
                className="mt-1 h-6 md:h-full p-2 w-full border border-gray-300 rounded-md"
              >
                <option value="">Search Hospital</option>
                <option value="hospital1">hospital1</option>
                <option value="hospital2">hospital2</option>
                
              </select>
            </div>

            <div className="w-full md:w-1/3 px-2 flex justify-end">
              <button onClick={handleSearch} className="bg-blue-100 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded text-sm">
                Search
              </button>
            </div>
          </div>
          <LineChart />
          <div className="flex flex-wrap gap-5 justify-between m-4">
          <div className="bg-red-200 bg-opacity-90 rounded-lg block p-2.5 drop-shadow-lg">
            <span className="flex items-center justify-center text-blue-700 font-bold text-4xl">Refer In</span>
            <div className="flex flex-col sm:flex-row items-center justify-center p-2.5">
            <div className="mr-4">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                isClearable
                placeholderText="ตั้งแต่วันที่"
                className="bg-white text-black font-normal py-2 rounded mt-4"
              />
            </div>
            <div className="mr-4">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)} // Set end date
                dateFormat="dd/MM/yyyy"
                isClearable
                placeholderText="ถึงวันที่"
                className="bg-white text-black font-normal py-2 rounded mt-4" 
              />
            </div>
            <button onClick={handleApplyFilter} className="bg-white text-black font-normal py-2 px-4 rounded mt-4">
              ดูรายงาน
            </button>
            </div>
            <div className="flex flex-col gap-20 sm:flex-row items-center justify-center p-4">
            <div className="flex flex-col items-center justify-center">
              <FaVanShuttle className="w-24 h-24 text-blue-700" />
              <p>ข้อมูลนำเข้าผู้ป่วยทั้งหมด <span className="text-blue-700">{datareferin}</span> ราย</p>
              </div>
              <div className="flex flex-col items-center justify-center">
              <FaWheelchair className="w-24 h-16 text-blue-700" />
              <p className="pt-8">ข้อมูลรับเข้ามาแล้ว <span className="text-blue-700">{referin}</span> ราย</p>
              </div>
              </div>
          </div>
            <div className="bg-yellow-100 bg-opacity-90 rounded-lg block p-2.5 drop-shadow-lg">
              <span className="flex items-center justify-center text-blue-700 font-bold text-4xl">Refer Out</span>
              <div className="flex flex-col sm:flex-row items-center justify-center p-2.5">
              <div className="mr-4">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  isClearable
                  placeholderText="ตั้งแต่วันที่"
                  className="bg-white text-black font-normal py-2 rounded mt-4"
                />
              </div>
              <div className="mr-4">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)} // Set end date
                  dateFormat="dd/MM/yyyy"
                  isClearable
                  placeholderText="ถึงวันที่"
                  className="bg-white text-black font-normal py-2 rounded mt-4" 
                />
              </div>
              <button onClick={handleApplyFilter} className="bg-white text-black font-normal py-2 px-4 rounded mt-4">
                ดูรายงาน
              </button>
              </div>
              <div className="flex flex-col gap-20 sm:flex-row items-center justify-center p-4">
            <div className="flex flex-col items-center justify-center">
              <FaVanShuttle className="w-24 h-24 text-blue-700" />
              <p>ข้อมูลส่งต่อทั้งหมด <span className="text-blue-700">{datareferout}</span> ราย</p>
              </div>
              <div className="flex flex-col items-center justify-center">
              <FaWheelchair className="w-24 h-16 text-blue-700" />
              <p className="pt-8">ข้อมูลรับตัวไปแล้ว <span className="text-blue-700">{referout}</span> ราย</p>
              </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
