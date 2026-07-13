import { Helmet } from "react-helmet-async";
import Header from "../../Components/Header/Header";
import LatamrustBanner from "../../Components/LatamrustBanner/LatamrustBanner";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import GlobalBackground from "../../Components/GlobalBackground/GlobalBackground";

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
      </main>
      <Footer />
    </GlobalBackground>
  );
}

export default HomePage;