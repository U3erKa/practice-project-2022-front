import { Link } from 'react-router-dom';
import createList from 'utils/createList';
import styles from './PricingCards.module.sass';

export default function PricingCards(
  /** @type {{cards: import('pricingConstants').PricingCards}} */ { cards }
) {
  const mapPricingCards = cards.map(
    ({
      id,
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
            <p className={styles.prize}>
              Prize to Winner - ${prizeToWinner} (Included)
            </p>
            <p className={styles.services}>
              Validation Services & Upgrades (${servicesValue} value)
            </p>
            <ul className={styles.benefits}>{createList(listOfBenefits)}</ul>
            <p className={styles.entries}>
              Expected {expectedEntries}+ Entries
            </p>
          </div>
        )}
        {isPartiallyRefundable && (
          <p className={styles.refund}>Partial Refund Option</p>
        )}
        <Link to={`/startcontest?type=${id}`} className={styles.start}>
          {'\u2714 Start'}
        </Link>
      </div>
    )
  );

  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>{mapPricingCards}</div>
    </div>
  );
}
