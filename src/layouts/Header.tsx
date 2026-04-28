import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { navArr } from "../utils/home/index"; // Importing the array
import { LanguageContext } from "@/LanguageContext";
import { logo } from "@/assests/Home";
import 'aos/dist/aos.css';
import AOS from 'aos';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export default function Header({ toggleSidebar }: any) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage); // Update global language state
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS animations
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtering the navbar data based on selected language
  const filterData = navArr.find((item) => item.lang === language)?.data || [];

  return (
    <section
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-gradient-to-t from-green-700 to-orange-500  shadow-lg h-20" : "bg-transparent"}`}
      style={{
        height: isScrolled ? "5rem" : "5rem",
        color: isScrolled ? "white" : "#111827",
      }}
    >
      <div className="flex h-20 w-full p-5 px-14 z-50 justify-between items-center">
        {/* Logo */}
        <img src={logo.src} alt="" className="w-auto h-14" />

        {/* Navbar items */}
        <div className="w-full cursor-pointer flex justify-center gap-7 uppercase font-medium lg:flex">
          {filterData.map((item) => (
            <span
              key={item.id}
              className={`h-full w-fit gap-2 cursor-pointer relative text-sm font-serif font-bold ${
                currentPath === item.path ? "text-blue-500" : "text-white "
              }`}
              onClick={() => router.push(item.path)}
            >
              <p className="logoWarper_two">{item.title}</p>
            </span>
          ))}
        </div>

        {/* Contact and Language Switcher */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2  whitespace-nowrap">
            <ContactPhoneIcon className="text-orange-400 text-2xl" />
            <p className="text-sm text-white  whitespace-nowrap">+91 9777063999</p>
          </span>

          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="text-black p-1 bg-white rounded-md border-2 text-sm border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-500 ease-in-out shadow-md hover:cursor-pointer hover:bg-gray-50 hover:shadow-lg"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <option value="en" className="p-2 bg-gray-100 hover:bg-blue-200">EN</option>
            <option value="de" className="p-2 bg-gray-100 hover:bg-blue-200">DE</option>
            <option value="es" className="p-2 bg-gray-100 hover:bg-blue-200">ES</option>
            <option value="ar" className="p-2 bg-gray-100 hover:bg-blue-200">AR</option>
          </select>
        </div>
      </div>
    </section>
  );
}
