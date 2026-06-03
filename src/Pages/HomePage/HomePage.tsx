import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import Benefits from "../../Components/Benefits/Benefits";
import Projects from "../../Components/Projects/Projects";
import ServerPlans from "../../Components/ServerPlans/ServerPlans";
import Process from "../../Components/Process/Process";
import Testimonials from "../../Components/Testimonials/Testimonials";
import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";
import GlobalBackground from "../../Components/GlobalBackground/GlobalBackground";

function HomePage() {
  return (
    <GlobalBackground>
      <Header />
      <Hero />
      <Services />
      <ServerPlans />
      <Benefits />
      <Projects />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
    </GlobalBackground>
  );
}

export default HomePage;
