import React, { useState } from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useGetDataUser } from "../../services/auth/get_user";

export const Navbar = () => {
  const [query, setQuery] = useState([]);
  const navigate = useNavigate();
  const { data: dataUser } = useGetDataUser({});

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  const handleLogout = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    window.location.href = "/";
  };

  return (
    <div className="Navbar w-screen h-[4rem] flex items-center justify-between absolute z-20">
      <div className="mx-[1rem] pl-[2rem] cursor-pointer" onClick={() => navigate(`/homepage`)}>
        <img src={logo} alt="logo" className="w-[10rem]" />
      </div>
      <div>
        <form className="w-[20rem]" onSubmit={handleSubmit}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <input
              type=""
              id="default-search"
              className="block w-full p-2 pr-[2rem] pl-[1rem] text-md font-semibold text-white border border-[#db0000] rounded-full bg-transparent dark:border-[#db0000] dark:placeholder-gray-500 dark:text-white hover:bg-[#db0000] hover:placeholder:text-white"
              placeholder="Search your film..."
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none ">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
          </div>
        </form>
      </div>
      <div className="pr-[2rem] pl-[6rem] flex justify-center items-center">
        <div className="">
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                color="white"
                rounded="full"
                bg="#db0000"
                _hover={{
                  bg: "#831010",
                }}
              >
                {dataUser ? dataUser?.data?.name : "nousername"}
              </MenuButton>
              <MenuList width="10rem">
                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </div>
      </div>
    </div>
  );
};
