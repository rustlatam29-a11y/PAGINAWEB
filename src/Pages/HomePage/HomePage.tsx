import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import Contact from "../../Components/Contact/Contac";
import Footer from "../../Components/Footer/Footer";
import SkyHosting from "../../Components/SkyHosting/SkyHosting";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Section />
      <SkyHosting />
      <Contact />
      <Footer title="Footer Title" />
    </>
  );
}

export default HomePage;
