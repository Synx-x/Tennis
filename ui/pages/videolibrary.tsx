import React, { useEffect } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import VideoGallery from "../components/VideoLibrary/Gallery";
import Hero from "../components/VideoLibrary/Hero";
import "../styles/global/scrollbarOverlay.module.scss";

const VideoLibrary = () => {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          overflow: overlay;
        }
      `}</style>

      <NavigationBar />
      <Hero />
      <VideoGallery />
      <Footer />
    </>
  );
};

export default VideoLibrary;
