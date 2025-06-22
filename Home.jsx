import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import Player from './Player';
import Display from './Display';
import { PlayerContext } from '../context/PlayerContext';

const Home = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-[#7f1dd]">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio src={track.file} ref={audioRef} />
    </div>
  );
};

export default Home;
