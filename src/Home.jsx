import Main from "./components/Main";
import About from "./components/About";
import "./assets/css/vendor.css";
import "./assets/css/style-azalea.css";
import Layout from "./Layout";
import Video from "./components/Video";
import { useRef } from "react";
function Home() {
  const roadmapRef = useRef(null)
  const faqsRef = useRef(null)
  const contactRef = useRef(null)

  const roadmapScroll = () => roadmapRef.current.scrollIntoView()   
  const faqsScroll = () => faqsRef.current.scrollIntoView()   
  const contactScroll = () => contactRef.current.scrollIntoView()   
  return (
    <Layout roadmapScroll={roadmapScroll} faqsScroll={faqsScroll} contactScroll={contactScroll}>
      <div>
        <Video />
        <Main />
        <About roadmapRef={roadmapRef} faqsRef={faqsRef} contactRef={contactRef}  />
      </div>
    </Layout>
  );
}

export default Home;
