import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import SEOContent from "../../Components/SEOContent/SEOContent";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Section />
      <SEOContent />
      <Footer title="Footer Title" />
    </>
  );
}

export default HomePage;
