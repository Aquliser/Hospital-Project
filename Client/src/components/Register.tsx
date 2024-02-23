import { useState } from 'react';
import { CgProfile } from "react-icons/cg";

import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [password, setPassword] = useState('');
  const [personal_id, setPersonal_id] = useState('');
  const [email, setEmail] = useState('');
  const [hospital_name, setHospital_name] = useState('');
  const [hospital_id, setHospital_id] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [prename, setPrename] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [sex, setSex] = useState('');
  const [position, setProsition] = useState('');
  const [level, setLevel] = useState('');
  const [birthday, setBirthday] = useState('');
  const [agency, setAgency] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [phone_number_agency, setPhone_number_agency] = useState('');
  const [password_again, setPassword_again] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // ทำการลงทะเบียน จริงๆ ที่นี่
    // ในตัวอย่างนี้เราจะทำการ alert ถ้าลงทะเบียนสำเร็จ
    alert('Registration successful! You can now login.');
    navigate('/Register');
  };

  return (
    <div className="flex">
      <div className="w-2/4 flex justify-center items-center bg-white drop-shadow-2xl	">
            
          <div className='flex flex-row'>
          <div className="flex flex-1 justify-center items-start text-7xl text-blue-800 font-bold">
          Create Account
          </div>
      </div>
      </div>
      <div className="bg-blue-800 h-full w-full flex justify-center items-center">
      <div className="flex items-center justify-start py-4 mx-auto md:h-screen lg:py-0 w-[80%] lg:w-auto">
        <form className="w-full space-y-8" onSubmit={handleRegister}>    
        <div className="flex flex-col md:flex-row mb-4">
          <div className="mb-4 drop-shadow-lg flex-auto md:w-48">
            <label className="text-white">Personal ID</label>
            <div className="relative">
                <CgProfile className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-700 h-6 w-6"  />
                <input 
                  className="pl-10 bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  id="personalID" 
                  type="text" 
                  value={personal_id} 
                  onChange={(e) => setPersonal_id(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4 drop-shadow-lg flex-auto md:w-80 md:ml-4">
              <label className="text-white">E-Mail</label>
              <input 
                className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                id="email" 
                type="text" 
                placeholder="@" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-48 lg:w-40">
              <label className="text-white">ชื่อโรงพยาบาล</label>
              <input 
                className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                id="Hospital_name" 
                type="text" 
                value={hospital_name} 
                onChange={(e) => setHospital_name(e.target.value)}
              />
            </div>
            <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-40 lg:w-48">
              <label className="text-white">รหัสสถานพยาบาล</label>
              <input 
                className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                id="Hospital_id" 
                type="text" 
                value={hospital_id} 
                onChange={(e) => setHospital_id(e.target.value)}
              />
            </div> 
            <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-40 lg:w-48">
              <label className="text-white">จังหวัด</label>
              <select 
                className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                id="province" 
                value={province} 
                onChange={(e) => setProvince(e.target.value)}
              >
                <option value="">เลือกจังหวัด</option>
                <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                <option value="นนทบุรี">นนทบุรี</option>
              </select>
            </div>
            <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-40 lg:w-48">
              <label className="text-white">เขต</label>
              <select 
                className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                id="district" 
                value={district} 
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value="">เลือกเขต</option>
                <option value="เขตพระนคร">เขตพระนคร</option>
                <option value="เขตดุสิต">เขตดุสิต</option>
                {/* เพิ่มต่อไปตามจำนวนเขตที่ต้องการ */}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-24">
              <label className="text-white">คำนำหน้า</label>
              <select 
                className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                id="prename" 
                value={prename} 
                onChange={(e) => setPrename(e.target.value)}
              >
                <option value="">เลือกคำนำหน้า</option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </select>
            </div>
            <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-80">
              <label className="text-white">ชื่อ</label>
              <input 
                className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                id="name" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-80">
              <label className="text-white">นามสกุล</label>
              <input 
                className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                id="lastname" 
                type="text" 
                value={lastname} 
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
          <div className="mb-4 drop-shadow-lg flex-auto w-36">
            <label className="text-white">เพศ</label>
            <select 
              className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
              id="sex" 
              value={sex} 
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="">เลือกเพศ</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
              <option value="อื่นๆ">อื่นๆ</option>
            </select>
          </div>
          <div className="mb-4 drop-shadow-lg flex-auto w-32">
            <label className="text-white">วันเกิด</label>
            <input 
              className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
              id="birthday" 
              type="date" 
              value={birthday} 
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <div className="mb-4 drop-shadow-lg flex-auto w-36">
            <label className="text-white">ตำแหน่ง</label>
            <input 
              className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
              id="position" 
              type="text" 
              value={position} 
              onChange={(e) => setProsition(e.target.value)}
            />
          </div>
          <div className="mb-4 drop-shadow-lg flex-auto w-36">
            <label className="text-white">ระดับ</label>
            <input 
              className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
              id="level" 
              type="text" 
              value={level} 
              onChange={(e) => setLevel(e.target.value)}
            />
          </div>
          </div>
          <div className="flex flex-wrap">
          <div className="mb-4 drop-shadow-lg flex-auto w-48">
            <label className="text-white">หน่วยงาน</label>
            <input 
              className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
              id="agency" 
              type="text" 
              value={agency} 
              onChange={(e) => setAgency(e.target.value)}
            />
          </div>
          <div className="mb-4 drop-shadow-lg flex-auto w-48">
            <label className="text-white">โทรมือถือ</label>
            <input 
              className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
              id="phonenumber" 
              type="tel" 
              value={phone_number} 
              onChange={(e) => setPhone_number(e.target.value)}
            />
          </div>
          <div className="mb-4 drop-shadow-lg flex-auto w-48">
            <label className="text-white">โทรหน่วยงาน</label>
            <input 
              className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
              id="phone_number_agency" 
              type="tel" 
              value={phone_number_agency} 
              onChange={(e) => setPhone_number_agency(e.target.value)}
            />
          </div>
          </div>
          <div className="flex flex-wrap">
          <div className="mb-4 drop-shadow-lg flex-auto w-64">
            <label className="text-white">รหัสผ่าน</label>
            <input 
              className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6 drop-shadow-lg flex-auto w-64">
          <label className="text-white">ป้อนรหัสผ่านอีกครั้ง</label>
            <input 
              className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" 
              id="password_again" 
              type="password" 
              value={password_again}
              onChange={(e) => setPassword_again(e.target.value)}
            />
          </div>
          </div>    
          <div className="mb-4 drop-shadow-lg">
          <div className="flex items-center justify-center">
            <button 
              className="bg-red-200 border border-gray-500 text-blue-700 font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
              type="submit"
            >
            <Link to="/Register">CREATE</Link>
            </button>
            <button 
              className=" bg-gray-300 bg-opacity-90 border-gray-500 text-blue-700 font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
            >
            <Link to="/Login">CANCEL</Link>
            </button>
            </div> 
            </div>     
        </form>
      </div>
      </div>
    </div>
  );
};

export default Register;
