import React, { useEffect, useRef } from "react";
import DisplayHome from "./DisplayHome";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

function Display() {
  const displayref = useRef();
  const loc = useLocation();
  const isAlbum = loc.pathname.includes("album");
  const albumID = isAlbum ? loc.pathname.slice(-1) : "";
  const bgclr = albumsData[Number(albumID)]?.bgColor || "#7f1d1d";

  useEffect(() => {
    if (isAlbum) {
      displayref.current.style.background = `linear-gradient(${bgclr},#7f1d1d)`;
    } else {
      displayref.current.style.background = "#7f1d1d";
    }
  }, [isAlbum, bgclr]);

  return (
    <div
      ref={displayref}
      className="w-[100%] m-2 px-6 pt-4 rounded text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
