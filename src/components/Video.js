import React from "react";

const Video = ({ videoData }) => {
  const { items } = videoData;

  const { id, snippet } = items[0];

  const loaded = () => {
    const videoId = id;
    const embedVideo = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="360"
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