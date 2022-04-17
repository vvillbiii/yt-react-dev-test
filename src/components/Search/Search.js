import React from "react";
import "./search.css";

import Button from "../Button/Button";

const Search = ({ videoID, setVideoID, setVideoData }) => {
  const handleChange = (event) => {
    setVideoID(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${process.env.REACT_APP_API_KEY}`
    );

    const data = await response.json();
    setVideoData(data);
    setVideoID("");
  };

  return (
    <div className="search-container">
      <div className="searchbar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={videoID}
            placeholder="Search Video ID"
            name="videoID"
            onChange={handleChange}
          />
          <Button>Search</Button>
        </form>
      </div>
    </div>
  );
};

export default Search;
