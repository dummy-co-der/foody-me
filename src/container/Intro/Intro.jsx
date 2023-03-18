import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const videoRef = React.useRef();
  const [playVideo, setPlayVideo] = React.useState(false);
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      videoRef.current.pause();
    }
    else {
      videoRef.current.play();
    }
  }
  return (
    <div className="video">
      <video
        src={meal}
        ref={videoRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="video_overlay flex__center">
        <div
          className="video_overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo
            ? (<BsPauseFill color='#fff' fontSize={30} />)
            : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </div>
  )
};

export default Intro;
