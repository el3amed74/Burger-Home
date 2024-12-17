import Home from "./components/Home";
import Navbar from "./components/Navigation/Navbar";

export default function HomePage() {
  return (
    <div className="bg-[#f4f1ea]">
      <Navbar/>
      <Home />
    </div>
  );
}
