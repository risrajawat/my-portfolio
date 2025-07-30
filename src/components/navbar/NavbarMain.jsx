import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks closeMenu={closeMenu}/>
        </div>

        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 items-center justify-center rounded-full ">
        <button
          className="text-4xl p-3 border cursor-pointer border-orange rounded-full text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }} // Start position
            animate={{ opacity: 1, y: 0 }} // Animate to normal
            exit={{ opacity: 0, y: -20 }} // Exit animation
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[80px] left-0 w-full bg-black text-center py-6 flex flex-col gap-4 sm:hidden"
          >
            <NavbarLinks />
            <NavbarBtn />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarMain;
