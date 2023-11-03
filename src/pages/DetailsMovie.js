import React, { useEffect, useRef, useState } from "react";
import star from "../assets/img/star.png";
import { Navbar } from "../assets/components/Navbar";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Footer } from "../assets/components/Footer";
import { useDataVideoDetails } from "../services/get-data-video-Details-V4";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { actGetMovieDetails } from "../redux/actions/actGetMovieDetails";

export const DetailsMovie = () => {
  const { id } = useParams();
  const movieTrailerRef = useRef(null);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const { data: dataVideoDetails } = useDataVideoDetails({ id: id });
  const trailerVideoV4 = dataVideoDetails?.results.find((video) => video.site === "YouTube" && video.type === "Trailer");
  const linkUrl = `https://www.youtube.com/watch?v=${trailerVideoV4?.key}`;
  const details = useSelector((state) => state.getMovieDetails.movieDetails);
  const dispatch = useDispatch();

  const scrollIntoMovieTrailer = () => {
    if (movieTrailerRef.current) {
      movieTrailerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const getDataAll = async () => {
      await dispatch(actGetMovieDetails(id));
    };
    getDataAll();
    if (details) {
      setTimeout(() => {
        setShowSkeleton(false);
      }, 800);
    }
  }, []);

  return (
    <>
      <div className="">
        <Navbar />
        {details && (
          <div className="w-screen h-screen" key={details?.id}>
            <div className="w-screen h-screen flex absolute z-10">
              <div className="w-1/2 flex justify-center items-center">
                {showSkeleton ? <Skeleton width="17rem" height="22rem" /> : <img src={`https://image.tmdb.org/t/p/original/${details?.poster_path}`} alt="" className="w-[17rem] rounded-md hover:scale-110 duration-700" />}
              </div>
              <div className="w-1/2 flex flex-col justify-center">
                {showSkeleton ? <Skeleton width="15rem" height="2rem" /> : <h2 className="font-bold text-[2.5rem] text-white mb-[1rem]">{details?.original_title}</h2>}
                {showSkeleton ? <Skeleton width="8rem" /> : <h6 className="font-thin text-white text-[1rem] mb-[1rem] italic">{details?.release_date}</h6>}
                {showSkeleton ? <Skeleton width="30rem" count={6} /> : <p className="text-white mb-[1rem] w-[30rem] leading-6">{details?.overview}</p>}
                {showSkeleton ? (
                  <Skeleton width="4rem" />
                ) : (
                  <span className="flex items-center text-white text-[1rem] mb-[1rem]">
                    <img src={star} alt="" className="w-[1rem] h-[1rem] mr-[0.5rem] " /> {Math.round(details?.vote_average)}/10
                  </span>
                )}
                <button className="border border-red-700 text-white bg-red-700 font-semibold rounded-full px-[1rem] w-[10rem] h-[2.5rem] hover:scale-110 duration-100" onClick={scrollIntoMovieTrailer}>
                  Watch Trailer
                </button>
              </div>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${details?.backdrop_path}`} alt="" className="w-screen h-screen object-cover" />
            <div className="absolute w-screen h-screen inset-[-1px] h-100 bg-gradient-to-b from-transparent to-black top-0 transform"></div>
          </div>
        )}
      </div>
      <div id="movieTrailer" ref={movieTrailerRef} className="w-screen bg-black flex flex-col justify-center items-center px-[5rem] pt-[5rem] pb-[2rem]">
        <h2 className="text-white text-[2.5rem] font-bold pb-[3rem]">Movie Trailer</h2>
        <ReactPlayer url={linkUrl} width="100%" height="40rem" />
      </div>
      <Footer />
    </>
  );
};
