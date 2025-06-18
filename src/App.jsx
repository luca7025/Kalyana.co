import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Layout from "../Layout";
import Home from "./Component/Home/Home";
import AboutUs from "./Component/About-Us/AboutUs";
import GallerySection from "./Component/Gallery/GallerySection.jsx";
import Booking from "./Component/Contact/Booking.jsx";
import Loading from "./Component/Loading/Loading";
import ReviewSection from "./Component/Review/ReviewSection.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/load" element={<Loading />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/review" element={<ReviewSection />} />

            <Route path="/gallery" element={<GallerySection />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
