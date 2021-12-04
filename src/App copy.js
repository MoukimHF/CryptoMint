import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Roadmap from './sections/Roadmap';
import './styles/output.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Roadmap />
      <Footer />
    </>
  );
}

export default App;
