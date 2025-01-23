import Home from "./components/Home";
import Navbar from "./components/Navigation/Navbar";
import Footer from './components/Footer/Footer';

export default function HomePage() {
  return (
    <div className="bg-[#f4f1ea]">
      <Navbar/>
      <Home />
      <Footer/>
    </div>
  );
}
