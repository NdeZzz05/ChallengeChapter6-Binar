import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
import bgfilm from "../assets/img/bgFilm.jpg";
import { useNavigate } from "react-router-dom";
import { Footer } from "../assets/components/Footer";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { actGetMoviePopular } from "../redux/actions/actGetMoviePopular";

export const AllMovie = () => {
  const navigate = useNavigate();
  const [showSkeleton, setShowSkeleton] = useState(true);
  const popular = useSelector((state) => state.getMoviePopular.moviePopular);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieAll = async () => {
      await dispatch(actGetMoviePopular());
    };
    getMovieAll();
    if (popular) {
      setTimeout(() => {
        setShowSkeleton(false);
      }, 800);
    }
  }, [dispatch, popular]);

  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="w-screen h-1/2">
          <div className="w-screen h-1/2 absolute z-10 flex">
            <h2 className="text-white text-[2.5rem] font-bold flex justify-center items-center pl-[6rem]">All Movie</h2>
          </div>
          <img src={bgfilm} alt="" className="w-screen h-full object-cover"></img>
          <div className="absolute inset-[-2px] h-100 bg-gradient-to-b from-transparent to-black bottom-1/2 transform"></div>
        </div>
        <div className="w-screen bg-black flex flex-wrap">
          {popular?.map((value) => {
            return (
              <div className="m-auto w-[15rem] h-[32rem] cursor-pointer" key={value.id} onClick={() => navigate(`/detail/${value.id}`)}>
                {showSkeleton ? <Skeleton width="15rem" height="22rem" /> : <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt="" className="w-[15rem] m-auto rounded-md hover:scale-105" />}
                <div className="pt-[1rem] pl-[0.2rem]">
                  {showSkeleton ? <Skeleton width="10rem" height="1.5rem" /> : <h6 className="text-white text-[1.2rem] font-semibold">{value.original_title}</h6>}
                  {showSkeleton ? <Skeleton width="7rem" height="1.5rem" /> : <p className="text-white font-thin italic">{value.release_date}</p>}
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};
