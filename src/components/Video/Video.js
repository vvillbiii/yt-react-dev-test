import React from "react";
import "./video.css";

const Video = ({ videoData }) => {
  const loaded = () => {
    const { items } = videoData;

    const { id, snippet } = items[0];
    const videoId = id;
    const embedVideo = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="yt-player">
        <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src={embedVideo}
          frameborder="0"
        ></iframe>
        <div>
          <h3>{snippet.title}</h3>
          <p>{snippet.description}</p>
        </div>
      </div>
    );
  };

  const loading = () => {
    return (
      <div>
        <h1>Search Video</h1>
      </div>
    );
  };

  return videoData ? loaded() : loading();
};

export default Video;
