import { useState, useEffect } from 'react';
import Logo from './logo';
import { CgProfile } from "react-icons/cg";
import { FaPlusSquare } from "react-icons/fa";
import { TbBuildingBank } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

  type Province = {
    province_id: string;
    name_th: string;
  }
  
  type District = {
    name_th: string;
  }
  
  export const Register = () => {
    const [personal_id, setPersonal_id] = useState('');
    const [email, setEmail] = useState('');
    const [hospital_name, setHospital_name] = useState('');
    const [hospital_id, setHospital_id] = useState('');
    
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [selectedProvince, setSelectedProvince] = useState('')
    
    const [districts, setDistricts] = useState<District[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    
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
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchProvinces = async () => {
        try {
          const response = await axios.get("http://localhost:3001/Province");
          setProvinces(response.data);
        } catch (error) {
          console.error('Error fetching provinces:', error);
        }
      };
    
      fetchProvinces();
    }, []);
    
    useEffect(() => {
      const fetchDistricts = async (province_id:string) => {
        try {
          const response = await axios.get(`http://localhost:3001/Province/thaiAmphures/${province_id}`);
          setDistricts(response.data);
        } catch (error) {
          console.error('Error fetching districts:', error);
        }
      };
    
      if (selectedProvince) {
        fetchDistricts(selectedProvince);
      }
    }, [selectedProvince]);
    
    const handleProvinceChange = (province_id:string) => {
      setSelectedProvince(province_id);
    };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !email || !password || !confirmPassword || !personal_id ||
      !hospital_name || !hospital_id || !selectedProvince || !selectedDistrict ||
      !prename || !name || !lastname || !sex || !position || !level ||
      !birthday || !agency || !phone_number || !phone_number_agency ||
      !confirmPassword
    ) {
      alert('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      await axios.post('http://localhost:3001/register', {    
          personal_id,
          email,
          hospital_name,
          hospital_id,
          selectedProvince,
          selectedDistrict,
          prename,
          name,
          lastname,
          sex,
          birthday,
          position,
          level,
          agency,
          phone_number,
          phone_number_agency,
          password
      });

    alert('Registration successful! You can now login.');
            navigate('/Register'); // นำผู้ใช้ไปยังหน้า Login
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Error registering user. Please try again later.');
        }
    };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full hidden xl:block p-8 pt-32 bg-white drop-shadow-2xl">
        <div className='flex flex-col'>
          <div className="flex flex-col justify-start items-start text-4xl md:text-7xl text-blue-800 font-bold">
            <div className="flex">Create</div>
            <div className="flex">Account</div>
          </div>
          <div className="flex justify-start mt-10 items-center pl-8 text-4xl md:text-7xl text-blue-800 font-bold">
            <Logo />
          </div>
        </div>

      </div>
      <div className="w-full bg-blue-800 p-8 h-full flex justify-center items-center">
        <div className="flex items-center justify-start mx-auto py-8 px-4 md:py-0 md:px-8 md:h-screen w-full md:w-[80%] lg:w-auto">
          <form className="w-full space-y-8" onSubmit={handleRegister}>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="mb-4 drop-shadow-lg flex-auto md:w-48">
                <label className="text-white">Personal ID</label>
                <div className="relative">
                  <CgProfile className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-700 h-6 w-6" />
                  <input
                    className="pl-10 bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    id="personalID"
                    type="text"
                    value={personal_id}
                    onChange={(e) => setPersonal_id(e.target.value)} />
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
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap ">
              <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-48 lg:w-40">
                <label className="text-white">ชื่อโรงพยาบาล</label>
                <div className="relative">
                  <FaPlusSquare className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-700 h-6 w-6" />
                  <input
                    className="pl-10 bg-gray-50  text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    id="Hospital_name"
                    type="text"
                    value={hospital_name}
                    onChange={(e) => setHospital_name(e.target.value)} />
                </div>
              </div>
              <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-40 md:ml-4 lg:w-48">
                <label className="text-white">รหัสสถานพยาบาล</label>
                <div className="relative">
                  <TbBuildingBank className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-700 h-6 w-6" />
                  <input
                    className="pl-10 bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    id="Hospital_id"
                    type="text"
                    value={hospital_id}
                    onChange={(e) => setHospital_id(e.target.value)} />
                </div>
              </div>
              <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-40 md:ml-4 lg:w-48">
                <label className="text-white">จังหวัด</label>
                <select
                    className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    id="province"
                    value={selectedProvince}
                    onChange={(e) => handleProvinceChange(e.target.value)}>
                    <option value="">เลือกจังหวัด</option>
                      {provinces.map((province) => (
                      <option key={province.province_id} value={province.province_id}>
                      {province.name_th}
                    </option>
                    ))}
                  </select>
              </div>
              <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-40 md:ml-4 lg:w-48">
                <label className="text-white">เขต</label>
                <select
                  className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="district"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                  <option value="">เลือกเขต</option>
                  {districts.map((district, index: number) => (
                    <option key={index} value={district.name_th}>
                      {district.name_th}
                    </option>
                  ))}
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
              <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-80 md:ml-4">
                <label className="text-white">ชื่อ</label>
                <input
                  className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-4 drop-shadow-lg flex-auto w-full md:w-80 md:ml-4">
                <label className="text-white">นามสกุล</label>
                <input
                  className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  id="lastname"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)} />
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
              <div className="mb-4 drop-shadow-lg flex-auto w-32 md:ml-4">
                <label className="text-white">วันเกิด</label>
                <input
                  className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  id="birthday"
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)} 
                  />
              </div>
              <div className="mb-4 drop-shadow-lg flex-auto w-36 md:ml-4">
                <label className="text-white">ตำแหน่ง</label>
                <input
                  className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  id="position"
                  type="text"
                  value={position}
                  onChange={(e) => setProsition(e.target.value)} />
              </div>
              <div className="mb-4 drop-shadow-lg flex-auto w-36 md:ml-4">
                <label className="text-white">ระดับ</label>
                <input
                  className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  id="level"
                  type="text"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)} />
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
                  onChange={(e) => setAgency(e.target.value)} />
              </div>
              <div className="mb-4 drop-shadow-lg flex-auto w-48 md:ml-4">
                <label className="text-white">โทรมือถือ</label>
                <div className="relative">
                  <IoIosCall className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-700 h-6 w-6" />
                  <input
                    className="pl-10 bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    id="phonenumber"
                    type="tel"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)} />
                </div>
              </div>
              <div className="mb-4 drop-shadow-lg flex-auto w-48 md:ml-4">
                <label className="text-white">โทรหน่วยงาน</label>
                <div className="relative">
                  <IoIosCall className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-700 h-6 w-6" />
                  <input
                    className="pl-10 bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    id="phone_number_agency"
                    type="tel"
                    value={phone_number_agency}
                    onChange={(e) => setPhone_number_agency(e.target.value)} />
                </div>
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
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="mb-6 drop-shadow-lg flex-auto w-64 md:ml-4">
                <label className="text-white">ป้อนรหัสผ่านอีกครั้ง</label>
                <input
                  className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="drop-shadow-lg flex-auto w-32">
                <button
                  type="submit"
                  className="bg-red-200 border border-gray-500 text-blue-700 font-bold sm:text-sm rounded-lg block p-2.5 "
                >CREATE
                </button>
              </div>
              <div className="drop-shadow-lg flex-auto w-32">
                <button
                  className=" bg-gray-300 bg-opacity-90 border-gray-500 text-blue-700 font-bold sm:text-sm rounded-lg block p-2.5"
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