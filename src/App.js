import { useState } from "react";

import Search from "./components/Search";
import Video from "./components/Video";

function App() {
  const [videoID, setVideoID] = useState("");
  const [videoData, setVideoData] = useState(null);

  return (
    <div className="App">
      <h1>YouTube App</h1>
      <div className="search-bar">
        <Search
          videoID={videoID}
          setVideoID={setVideoID}
          setVideoData={setVideoData}
        />
      </div>
      <div className="video-player">
        <Video videoData={videoData} />
      </div>
    </div>
  );
}

export default App;
