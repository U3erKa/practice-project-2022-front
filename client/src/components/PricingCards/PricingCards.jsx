import createList from 'utils/createList';
import styles from './PricingCards.module.sass';

export default function PricingCards(
  /** @type {{cards: import('pricingConstants').PricingCards}} */ { cards }
) {
  const mapPricingCards = cards.map(
    ({
      tier,
      memo,
      price,
      description,
      prizeToWinner,
      servicesValue,
      expectedEntries,
      listOfBenefits,
      isPartiallyRefundable,
    }) => (
      <div className={styles.containerCard}>
        <div className={styles.cardHead}>
          <h3 className={styles.cardHeading}>{tier}</h3>
          <p className={styles.cardMemo}>{memo}</p>
          <p className={styles.cardPrice}>US${price}</p>
        </div>
        {description ? (
          <div>{createList(description)}</div>
        ) : (
          <div>
            <p>Prize to Winner - ${prizeToWinner} (Included)</p>
            <p>Validation Services & Upgrades (${servicesValue} value)</p>
            <ul>{createList(listOfBenefits)}</ul>
            <p>Expected {expectedEntries}+ Entries</p>
          </div>
        )}
        {isPartiallyRefundable && <p>Partial Refund Option</p>}
      </div>
    )
  );

  return <div className={styles.containerMain}>{mapPricingCards}</div>;
}
