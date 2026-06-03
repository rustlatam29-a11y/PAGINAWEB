import Header from "../../Components/Header/Header";
import Section from "../../Components/Section/Section";
import CurrencyCalculator from "../../Components/CurrencyCalculator/CurrencyCalculator";
import SEOContent from "../../Components/SEOContent/SEOContent";
import Footer from "../../Components/Footer/Footer";
import GlobalBackground from "../../Components/GlobalBackground/GlobalBackground";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ServerSales from "../../Components/ServerSales/ServerSales";

function HomePage() {
  return (
    <GlobalBackground>
      <Header />
      <Breadcrumbs />
      <ServerSales />
      <CurrencyCalculator />
      <Section />
      <SEOContent />
      <Footer />
    </GlobalBackground>
  );
}

export default HomePage;
