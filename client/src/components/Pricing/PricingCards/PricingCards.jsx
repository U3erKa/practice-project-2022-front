import React from 'react';
import { TopBox } from '../TopBox/TopBox';
import styles from './PricingCards.module.sass';

/**
 * @typedef {Object[]} PricingCards
 * @property {number} id
 * @property {string} tier
 * @property {string} memo
 * @property {number} price
 * @property {number} [prizeToWinner]
 * @property {number} [servicesValue]
 * @property {number} [expectedEntries]
 * @property {TextEntryList} [listOfBenefits]
 * @property {TextEntryList} [description]
 * @property {boolean} isPartiallyRefundable
 * 
 * @typedef {(TextEntry | TextEntry[])[]} TextEntryList
 * @typedef {{type: 'plain' | 'link', text: string, [prop: string]: any}} TextEntry
 */

/** @type {PricingCards} */
export const pricingTiers = [
  {
    id: 0,
    tier: 'Bronze',
    memo: 'Branding on a budget',
    price: 299,
    prizeToWinner: 135,
    servicesValue: 39,
    expectedEntries: 300,
    listOfBenefits: [{ type: 'plain', text: 'Matching .com URL' }],
    isPartiallyRefundable: false,
  },
  {
    id: 1,
    tier: 'Gold',
    memo: 'Increase participation and basic brand validation',
    price: 449,
    prizeToWinner: 200,
    servicesValue: 305,
    expectedEntries: 600,
    listOfBenefits: [
      { type: 'plain', text: 'Matching .com URL' },
      { type: 'plain', text: 'Instant Trademark Check (One Database)' },
      { type: 'plain', text: 'NDA and More Privacy' },
      { type: 'plain', text: 'Project Promotion (Basic)' },
      { type: 'plain', text: 'Comprehensive Trademark Research' },
    ],
    isPartiallyRefundable: true,
  },
  {
    id: 2,
    tier: 'Platinum',
    memo: 'Work with top-level creatives, plus agency-style brand validation',
    price: 749,
    prizeToWinner: 300,
    servicesValue: 979,
    expectedEntries: 1000,
    listOfBenefits: [
      [
        { type: 'plain', text: 'Audience Testing (Up to 6 Names) ' },
        { type: 'link', text: 'View Sample Report', href: 'http://google.com' },
      ],
      { type: 'plain', text: 'Comprehensive Trademark Research (3 Names)' },
      { type: 'plain', text: 'Linguistics Analysis (3 Names)' },
      { type: 'plain', text: 'Tier A Creatives' },
      { type: 'plain', text: 'Matching .com URL' },
      { type: 'plain', text: 'Instant Trademark Check (4 Databases)' },
      { type: 'plain', text: 'NDA and More Privacy' },
      { type: 'plain', text: 'Enhanced Project Promotion' },
      { type: 'plain', text: 'Team Collaboration Tools' },
    ],
    isPartiallyRefundable: true,
  },
  {
    id: 3,
    tier: 'Managed',
    memo: 'A full agency experience without the agency price tag',
    price: 1499,
    description: [
      {
        type: 'plain',
        text: 'Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.',
      },
      {
        type: 'plain',
        text: "With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.",
      },
      [
        { type: 'plain', text: 'Learn More about ' },
        {
          type: 'link',
          text: 'Managed Contest Service',
          href: 'managed-contests',
        },
      ],
    ],
    isPartiallyRefundable: false,
  },
];

const PricingTextEntry = (/** @type {TextEntry} */ textEntry) => {
  switch (textEntry.type) {
    case 'link': {
      return <a href={textEntry.href}>{textEntry.text}</a>;
    }
    case 'plain': {
      return <span>{textEntry.text}</span>;
    }
    default: {
      return <>{textEntry.text}</>;
    }
  }
};

export default function PricingCards(
  /** @type {{cards: PricingCards}} */ { cards }
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
    }) => {
      const mapText = (
        /** @type {TextEntryList} */ text,
        isInsideList = false
      ) =>
        text.map((/** @type {TextEntry} */ textEntry, i) =>
          Array.isArray(textEntry) ? (
            <li key={i}>{mapText(textEntry, true)}</li>
          ) : isInsideList ? (
            PricingTextEntry(textEntry)
          ) : (
            <li key={i}>{PricingTextEntry(textEntry)}</li>
          )
        );
      return (
        <div className={styles.containerCard}>
          <TopBox tier={tier} memo={memo} price={price} />
          {description ? (
            <div>{mapText(description)}</div>
          ) : (
            <div>
              <p>Prize to Winner - ${prizeToWinner} (Included)</p>
              <p>Validation Services & Upgrades (${servicesValue} value)</p>
              <ul>{mapText(listOfBenefits)}</ul>
              <p>Expected {expectedEntries}+ Entries</p>
            </div>
          )}
          {isPartiallyRefundable && <p>Partial Refund Option</p>}
        </div>
      );
    }
  );

  return <div className={styles.containerMain}>{mapPricingCards}</div>;
}
