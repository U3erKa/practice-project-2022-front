/**
 * @typedef {Object[]} PricingCards
 * @property {number} id
 * @property {string} tier
 * @property {string} memo
 * @property {number} price
 * @property {number} [prizeToWinner]
 * @property {number} [servicesValue]
 * @property {number} [expectedEntries]
 * @property {import("utils/createList").TextEntryList} [listOfBenefits]
 * @property {import("utils/createList").TextEntryList} [description]
 * @property {boolean} isPartiallyRefundable
 */

/** @type {PricingCards} */
const PRICING_TIERS = [
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

export default PRICING_TIERS;
