import React from "react";
import logo from "../img/logo.png";

export const LogoNavbar = () => {
  return (
    <div className="Navbar w-screen h-[4rem] flex items-center justify-between absolute z-20 ">
      <div className="pl-[10rem] absolute z-40">
        <img src={logo} alt="logo" className="w-[10rem]" />
      </div>
      <div className="absolute inset-[-1px] h-100 bg-gradient-to-t from-transparent to-black transform"></div>
    </div>
  );
};
