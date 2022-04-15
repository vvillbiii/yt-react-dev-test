import { useState } from "react";

import Video from "./components/Video";

function App() {
  const [videoID, setVideoID] = useState(null);
  const [videoData, setVideoData] = useState(null);

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
  };

  return (
    <div className="App">
      <h1>YouTube App</h1>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={videoID}
            placeholder="Search by YouTube Video ID"
            name="video-ID"
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
      </div>
      <div className="video-player">
        <Video videoData={videoData} />
      </div>
    </div>
  );
}

export default App;
