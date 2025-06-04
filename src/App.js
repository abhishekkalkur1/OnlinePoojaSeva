import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Offers from './components/Offers.jsx';
import Plan from './components/Plan.jsx';
import Rooms from './components/Rooms.jsx';
import ImageSlider from './components/ImageSlider.jsx'
import Footer from './components/Footer.jsx'
import FAQ from './components/Faq.jsx';
import Testimonials from './components/Testimonals.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <Testimonials/>
      <FAQ />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
