import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import { styles } from '../style';
import { navLinks } from '../constants';
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 fixed z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="" className='w-20 ' />
          <p className='text-white text-[12px] font-bold cursor-pointer flex'>Daniel Success &nbsp; <span className='sm:block hidden'>   || The Secret Coder</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } transition duration-300 ease-in-out hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <IoClose
              className="text-3xl object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <RiMenu4Fill
              className="text-3xl object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 w-4 min-w-[200px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end flex-col gap-4 items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    } transition duration-300  text-[16px] font-medium font-poppins ease-in-out hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
