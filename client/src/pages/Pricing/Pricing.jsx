import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import PricingCards, { pricingTiers } from 'components/Pricing/PricingCards/PricingCards';

function Pricing(props) {
  return (
    <>
      <Header />
      <PricingCards cards={pricingTiers} />
      <Footer />
    </>
  );
}

export default Pricing;
