import { useState } from 'react';
import styles from '../style';
import { navLinks } from "../constants";
import logo from "../assets/logo/logo.png";
import close from "../assets/svg/close.svg";
import menu from "../assets/svg/menu.svg";
import search from "../assets/svg/search.svg";
import cart from "../assets/svg/cart.svg";
import user from "../assets/svg/user.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
    <div className="text-center text-white bg-[#FF5700] w-full overflow-hidden">
        <h1 className="h8">Sign in to get discount</h1>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter} border border-b-zinc-200 bg-stone-50`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-5 justify-between items-center navbar">
          <a href="#">
            <img src={logo} alt="getko" className="w-[140px] h-[50px] mr-10"/>
          </a>
          <ul className="list-none md:flex hidden justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
              <li 
                key={nav.id} className={`mr-10`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          
          <ul className="list-none md:flex hidden">
            <img src={search} alt="search" className="w-[20px] h-[20px] mr-5" />
            <img src={cart} alt="cart" className="w-[20px] h-[20px] mr-5" />
            <img src={user} alt="user" className="w-[20px] h-[20px] mr-5" />
          </ul>

          <div className="md:hidden flex flex-1 justify-end items-center">
            <img 
              src={toggle ? close : menu} 
              alt="menu"
              className='w-[25px] h-[25px] object-contain'
              onClick={() => setToggle((prev) => !prev)}/>

              <div className={`${toggle ? 'flex' : 'hidden'} 
              p-6 bg-gradient-to-r from-slate-300 to-slate-200 absolute transition
              ease-in-out delay-150
              top-20 right-0 mx-2 my-4 min-w-[150px] rounded-xl sidebar`}>
                <ul className="list-none flex flex-col justify-center items-center flex-1">
                  {navLinks.map((nav, index) => (
                    <li 
                      key={nav.id} className={`mt-2 mr-10 mb-3`}>
                      <a href={`#${nav.id}`}>
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <ul className="list-none flex flex-col justify-center items-center flex-1">
                  <img src={search} alt="search" className="w-[20px] h-[20px] mr-5 mb-5" />
                  <img src={cart} alt="cart" className="w-[20px] h-[20px] mr-5 mb-5" />
                  <img src={user} alt="user" className="w-[20px] h-[20px] mr-5 mb-5" />
                </ul>
              </div>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
}

export default Navbar