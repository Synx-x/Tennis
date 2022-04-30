import Hero from "../components/Hero";
import NavigationBar from "../components/NavigationBar";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import styles from "./../styles/index.module.scss";
type Props = {
  allPosts: Post[];
};

const Index = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
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
