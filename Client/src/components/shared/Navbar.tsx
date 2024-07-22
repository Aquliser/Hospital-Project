import { FaRegBell } from "react-icons/fa6";

const Navbar = () => {
const hospital_name ="Kwang Ya";
const name ="Karina Blue";
  return (
    <header className="bg-white border-b border-gray text-gray p-4 pr-16">
      <div className="flex items-center justify-end">
        <div className="bg-gray-200 flex items-center rounded-full">
        <FaRegBell className="text-blue-700 h-8 w-8 ml-4"/>
          <div className="m-2">
            <div className="text-blue-700 font-medium">Username : {name}</div>
            <div className="text-gray-500">Hospital Name : {hospital_name}</div>
          </div>
          {/* เรียกใช้งาน Profile component และส่ง imageUrl เข้าไป */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
