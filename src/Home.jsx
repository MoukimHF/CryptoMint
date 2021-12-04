import Main from "./components/Main";
import About from "./components/About";
import "./assets/css/vendor.css";
import "./assets/css/style-azalea.css";
import Layout from "./Layout";
function Home() {
  return (
    <Layout>
      <div>
        <Main />
        <About />
      </div>
    </Layout>
  );
}

export default Home;
