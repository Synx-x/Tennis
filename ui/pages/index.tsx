import Hero from "../components/Hero";
import NavigationBar from "../components/NavigationBar";
import VideoGallery from "../components/VideoGallery";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
type Props = {
  allPosts: Post[];
};

const Index = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <VideoGallery />
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
