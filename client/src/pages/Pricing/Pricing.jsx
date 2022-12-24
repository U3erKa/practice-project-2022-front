import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import PricingCards from 'components/PricingCards/PricingCards';
import PRICING_TIERS from 'pricingConstants';

function Pricing(props) {
  return (
    <>
      <Header />
      <PricingCards cards={PRICING_TIERS} />
      <Footer />
    </>
  );
}

export default Pricing;
