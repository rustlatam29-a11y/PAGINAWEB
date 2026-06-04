import Header from "../../Components/Header/Header";
import LatamrustBanner from "../../Components/LatamrustBanner/LatamrustBanner";
import Hero from "../../Components/Hero/Hero";
import VideoSection from "../../Components/VideoSection/VideoSection";
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
      <main>
        <LatamrustBanner />
        <Hero />
        <VideoSection />
        <ServerPlans />
        <Benefits />
        <Projects />
        <Process />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </GlobalBackground>
  );
}

export default HomePage;
