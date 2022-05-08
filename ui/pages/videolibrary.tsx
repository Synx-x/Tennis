import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import VideoGallery from "../components/VideoLibrary/VideoGallery";
import Hero from "../components/VideoLibrary/Hero";
import "../styles/global/scrollbarOverlay.module.scss";

const VideoLibrary = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <VideoGallery />
      <Footer />
    </>
  );
};

export default VideoLibrary;
