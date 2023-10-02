import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaGooglePlusG, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import DocLogo from '../assets/logo.png'

const socialIcons = [
  FaTwitter, FaFacebookF, FaGooglePlusG, FaVimeoV, FaPinterestP,
];

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {label: 'HOME', to: '/' },
  ];

const [activeBounce, setActiveBounce] = useState(false);
const [activeLink, setActivelink] = useState('');
const navigate = useNavigate();

const BounceEffect = () => {
  setActiveBounce(true);

};

const DelayLink = (e) => {
   e.preventDefault();
   setTimeout(() => {
   setActivelink('/')
 navigate('/')
  }, 600);

}

useEffect(() => {
 let timeOutId;
 if(activeLink){
  timeOutId=setTimeout(() => {
    setActivelink('/')
  }, 600);

 }
 return () => {
  clearTimeout(timeOutId); // Clear the timeout if the effect runs again
};
}, [activeLink]);

useEffect(() => {
  if (activeBounce) {
    const timeoutId = setTimeout(() => {
      setActiveBounce(false);
    }, 400); // animation duration

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the effect runs again
    };
  }
}, [activeBounce]);

const setPath = activeLink || "/" 

  return (
    <>
      <div className="lg:hidden p-4">
        <button
          type="button"
          className="p-2 text-black hover:text-green-400 move-button"
          onClick={ toggleMenu }
        >
          <HiMenuAlt4 className='menu-button'/>
        </button>
      </div>
      <div className={`fixed left-0 top-0 w-full h-full border-r bg-black z-10 opacity-65 border-r-gray-900 text-white transition-transform ease-in-out duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="pt-24 uppercase">
          <li className="py-4 px-8 cursor-pointer hover:text-green-400 transition-colors">
            <AiOutlineCloseCircle onClick={toggleMenu} className="text-3xl" />
          </li>
          {menuItems.map((item, index) => (
            <li key={index} className={`py-4 px-8 ${index < menuItems.length - 1 ? 'border-b border-white-700' : ''} cursor-pointer hover:text-green-400 transition-colors`}>
              <Link to={item.to} className="block w-full">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex py-24 flex-row self-end align-center justify-center">
          {socialIcons.map((Icon, index) => (
            <li key={index} className="p-[5px]">
              <Icon className="cursor-pointer hover:text-green-400 transition-colors" />
            </li>
          ))}
        </ul>
      </div>
      <div className="text-[#181818] w-[20%] min-h-screen py-2 border-r-2 border-r-[#f3f3f3] overflow-x-hidden hidden lg:block">
        <div className={`logo w-[15%] text-center mb-4 hover:text-white hover:bg-green-400 transition-all ${activeBounce  ? 'bounce' : ''}` } onClick={BounceEffect}>
        <Link 
              onClick={DelayLink}
              // onClick={ClickLink}
              to={setPath}
              className="block w-full "
            >
          <img src={DocLogo} alt="Logo Image" className=''/>
          </Link>
          
           </div>
      <ul className="flex flex-col py-16 justify-center items-center text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full text-center py-4 mb-4 hover:text-white hover:bg-green-400 transition-all">
              <Link to={item.to} className="block w-full">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex py-24 flex-row self-end align-center justify-center">
          {socialIcons.map((Icon, index) => (
            <li key={index} className="p-[5px]">
              <Icon className="cursor-pointer hover:text-green-400 transition-colors" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;