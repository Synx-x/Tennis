import React, { useEffect } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import VideoGallery from "../components/VideoLibrary/Gallery";
import Hero from "../components/VideoLibrary/Hero";
import "../styles/global/scrollbarOverlay.module.scss";

const VideoLibrary = () => {
  <style global jsx>{`
    html,
    body {
      overflow: overlay;
    }
  `}</style>;

  useEffect(() => {
    const body = document.querySelector("body");
    document.body.classList.add("overlay");
    return () => {
      body?.classList.remove("overlay");
    };
  });

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
