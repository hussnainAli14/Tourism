import React, { useRef, useState } from "react";
import "./videoSectionStyles.css";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";
import ScrollAnimation from "../../../animations/ScrollAnimation";

const VideoSection = (props) => {
  const variant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;
    // If the video is paused, play it; otherwise, pause it
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      console.log("play", videoRef.current.play);
    } else {
      video.pause();
      console.log("pause", videoRef);
      setIsPlaying(false);
    }
  };

  return (
    <ScrollAnimation variant={variant} duration={1.5}>
      <div className="vedioContent">
        <p className="mainTextVideo">{props.mainText}</p>
        <p className="subTextVideo">{props.subText}</p>
        <div className="videoPlayer">
          <video className="video" ref={videoRef} loop autoPlay muted>
            <source src="./Videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <button className="videoBtn" onClick={togglePlayPause}>
          {videoRef.current && !isPlaying ? "Play" : "Pause"}
          {videoRef.current && !isPlaying ? (
            <FaPlayCircle id="icon" color="black" />
          ) : (
            <FaRegCirclePause id="icon" color="black" />
          )}{" "}
        </button>
      </div>
    </ScrollAnimation>
  );
};

export default VideoSection;
