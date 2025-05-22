import Hero from "./components/Sections/Hero";
import Brands from "./components/Sections/Brands";
import Services from "./components/Sections/Services";
import Courses from "./components/Sections/Courses";
import Prices from "./components/Sections/Prices";
import Comments from "./components/Sections/Comments";
import Video from "./components/Sections/Video";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <Courses />
      <Video />
      <Comments />
      <Prices />
    </>
  );
}
