import React from "react";
import "./video.css";

const Video = ({ videoData }) => {
  const loaded = () => {
    const { items } = videoData;

    const { id, snippet } = items[0];
    const videoId = id;
    const embedVideo = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="yt-player-container">
        <div className="yt-player__video">
          <iframe
            id="ytplayer"
            type="text/html"
            src={embedVideo}
            frameBorder="0"
          ></iframe>
        </div>
        <div className="yt-player__content">
          <h3>{snippet.title}</h3>
          <p>{snippet.description}</p>
        </div>
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="start">
        <h2>Search Video</h2>
      </div>
    );
  };

  return videoData ? loaded() : loading();
};

export default Video;
