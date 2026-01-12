import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import VIPSection from "../../Components/VIPSection/VIPSection";
import SEOContent from "../../Components/SEOContent/SEOContent";
import Footer from "../../Components/Footer/Footer";
import GlobalBackground from "../../Components/GlobalBackground/GlobalBackground";

function HomePage() {
  return (
    <GlobalBackground>
      <Header />
      <Hero />
      <Section />
      <VIPSection />
      <SEOContent />
      <Footer title="Footer Title" />
    </GlobalBackground>
  );
}

export default HomePage;
