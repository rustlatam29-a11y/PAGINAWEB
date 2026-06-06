import { Helmet } from "react-helmet-async";
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
import ArgosEyesPartner from "../../Components/ArgosEyesPartner/ArgosEyesPartner";
import PaymentMethods from "../../Components/PaymentMethods/PaymentMethods";

function HomePage() {
  return (
    <GlobalBackground>
      <Helmet>
        <title>Rust Pirata 2275/2388 Gratis | LATAMRUST</title>
        <meta name="description" content="Descarga Rust Pirata 2275 y 2388 gratis. +30,000 plugins, AntiCheat y soporte 24/7. Ping bajo en Brasil, Argentina, Mexico y toda LATAM." />
        <link rel="canonical" href="https://latamrust.online/" />
        <meta property="og:title" content="Rust Pirata 2275/2388 Gratis | LATAMRUST" />
        <meta property="og:description" content="Descarga Rust Pirata 2275 y 2388 gratis. +30,000 plugins, AntiCheat y soporte 24/7. Ping bajo en Brasil, Argentina, Mexico y toda LATAM." />
        <meta property="og:url" content="https://latamrust.online/" />
      </Helmet>
      <Header />
      <main>
        {/* TIER 1 — ABOVE THE FOLD: Join CTA + trust badges */}
        <LatamrustBanner />

        {/* TIER 2 — FIRST SCROLL: Features + why us */}
        <Hero />
        <VideoSection />

        {/* TIER 3 — SECOND SCROLL: Plans + trust + social proof */}
        <ServerPlans />
        <PaymentMethods />
        <Benefits />
        <Process />
        <Testimonials />
        <Projects />

        {/* TIER 4 — TRUST SIGNAL: Partners */}
        <ArgosEyesPartner />

        {/* TIER 5 — SEO + support */}
        <FAQ />
      </main>
      <Footer />
    </GlobalBackground>
  );
}

export default HomePage;
