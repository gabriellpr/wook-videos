import React from "react";
import YouTube from "react-youtube";
import "./App.css";
import SearchBar from "./components/SearchBar";
import youtube from "./api";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  render() {
    return (
      <YouTube
        videoId="ulU7nPmG_8U" // defaults -> null
      />
    );
  }
}

export default App;
