import { Helmet } from "react-helmet-async";
import Header from "../../Components/Header/Header";
import LatamrustBanner from "../../Components/LatamrustBanner/LatamrustBanner";
import ServerSection from "../../Components/ServerSection/ServerSection";
import RustVersionCard from "../../Components/RustVersionCard/RustVersionCard";
import VideosSection from "../../Components/VideosSection/VideosSection";
import ServerPlans from "../../Components/ServerPlans/ServerPlans";
import FAQ from "../../Components/FAQ/FAQ";
import CommunitySection from "../../Components/CommunitySection/CommunitySection";
import Footer from "../../Components/Footer/Footer";
import GlobalBackground from "../../Components/GlobalBackground/GlobalBackground";

function HomePage() {
  return (
    <GlobalBackground>
      <Helmet>
        <title>Rust Pirata 2275 OldRecoil Gratis | RUST OLD SCHOOL</title>
        <meta
          name="description"
          content="Descarga Rust Pirata 2275 OldRecoil gratis. Servidor RUST OLD SCHOOL activo 24/7, +300 jugadores, AntiCheat profesional y ping bajo en Brasil, Argentina, México y toda LATAM."
        />
        <link rel="canonical" href="https://latamrust.online/" />
        <meta property="og:title" content="Rust Pirata 2275 OldRecoil Gratis | RUST OLD SCHOOL" />
        <meta
          property="og:description"
          content="Descarga Rust Pirata 2275 OldRecoil gratis. Servidor RUST OLD SCHOOL 24/7, AntiCheat y ping bajo LATAM."
        />
        <meta property="og:url" content="https://latamrust.online/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rust Pirata" />
        <meta property="og:image" content="https://latamrust.online/rust-old-school-logo.webp" />
        <meta property="og:image:alt" content="Rust Pirata 2275 OldRecoil — RUST OLD SCHOOL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rust Pirata 2275 OldRecoil Gratis | RUST OLD SCHOOL" />
        <meta
          name="twitter:description"
          content="Descarga Rust Pirata 2275 OldRecoil gratis. Servidor RUST OLD SCHOOL 24/7, AntiCheat y ping bajo LATAM. Sin Steam."
        />
        <meta name="twitter:image" content="https://latamrust.online/rust-old-school-logo.webp" />
      </Helmet>
      <Header />
      <main>
        {/* 1. Banner + Tutorial video al lado */}
        <LatamrustBanner />

        {/* 2. Comunidad / Foro — visible apenas scrolleas */}
        <CommunitySection />

        {/* 3. Servidor RUST OLD SCHOOL */}
        <ServerSection />

        {/* 4. Ficha técnica Rust 2275 */}
        <RustVersionCard />

        {/* 5. Trailer oficial */}
        <VideosSection />

        {/* 6. Planes / Ventas de servidores */}
        <ServerPlans />

        {/* 7. FAQ */}
        <FAQ />
      </main>
      <Footer />
    </GlobalBackground>
  );
}

export default HomePage;