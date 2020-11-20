import React from "react";
import "../style/videos.css";

const VideoItem = ({ videos, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(videos)} className="video-item item">
      <img
        className="ui image"
        src={videos.snippet.thumbnails.medium.url}
        alt={videos.snippet.description}
      />
      <div className="content">
        <div className="header">{videos.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
