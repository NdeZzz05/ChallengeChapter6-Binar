import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsMovie } from "../pages/DetailsMovie";
import { HomePage } from "../pages/HomePage";
import { AllMovie } from "../pages/AllMovie";
import { SearchMovie } from "../pages/SearchMovie";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";
import TokenProtected from "../assets/components/protected/TokenProtected";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route
          path="/homepage"
          element={
            <TokenProtected>
              <HomePage />
            </TokenProtected>
          }
        ></Route>
        <Route path="/detail/:id" element={<DetailsMovie />}></Route>
        <Route path="/allmovie" element={<AllMovie />}></Route>
        <Route path="/search/:query" element={<SearchMovie />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
