import { useState } from "react";
import "./App.css";

import Search from "./components/Search/Search";
import Video from "./components/Video/Video";

function App() {
  const [videoID, setVideoID] = useState("");
  const [videoData, setVideoData] = useState(null);

  return (
    <div className="App">
      <div className="header-container">
        <h1>YouTube App</h1>
      </div>
      <Search
        videoID={videoID}
        setVideoID={setVideoID}
        setVideoData={setVideoData}
      />
      <Video videoData={videoData} />
    </div>
  );
}

export default App;
