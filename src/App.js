import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Itemsection from "./Components/Section/Itemsection";
import Baner from "./Components/Baner/Baner";
import Offers from "./Components/Offers/Offer";
import Testimonial from "./Components/Testimonial/Testimonial";
import Digitel from "./Components/Digitel/Digitel";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="parent">
      <Navbar />
      <Baner />
      <div className="height"></div>
      <Itemsection />
      <Offers />
      <Testimonial />
      <Cards />
      <Slider />
      <div className="height"></div>
      <Digitel />
      <div className="height"></div>
      <Footer />
    </div>
  );
}
export default App;
{
  /* <div data-aos="zoom-out-up"></div> */
}
