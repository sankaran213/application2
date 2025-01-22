import Offerings from "./components/Offerings";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroWithNavbar from "./components/HeroWithDash";
import OverlapImageButton from "./components/Button";

function Home() {
  return (
    <div>
      <HeroWithNavbar />
      <Offerings />
      <FAQ />
      <OverlapImageButton />
      <Footer />
    </div>
  );
}

export default Home;
