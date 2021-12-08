import Main from "./components/Main";
import About from "./components/About";
import "./assets/css/vendor.css";
import "./assets/css/style-azalea.css";
import Layout from "./Layout";
import Video from "./components/Video";
import { useRef } from "react";
import Fade from "react-reveal/Fade";

function Home() {
  const roadmapRef = useRef(null);
  const faqsRef = useRef(null);
  const contactRef = useRef(null);

  const roadmapScroll = () => roadmapRef.current.scrollIntoView();
  const faqsScroll = () => faqsRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();
  return (
    <Layout
      roadmapScroll={roadmapScroll}
      faqsScroll={faqsScroll}
      contactScroll={contactScroll}
    >
      <div>
        <Fade left>
          <Video />
        </Fade>
        <Fade left>
        <Main />
        </Fade>
        <About />
      </div>
    </Layout>
  );
}

export default Home;
