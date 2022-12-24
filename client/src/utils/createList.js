/**
 * @typedef {(TextEntry | TextEntry[])[]} TextEntryList
 * @typedef {{type: 'plain' | 'link', text: string, [prop: string]: any}} TextEntry
 */

const listEntry = (/** @type {TextEntry} */ textEntry) => {
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

const createList = (/** @type {TextEntryList} */ text, isInsideList = false) =>
  text.map((/** @type {TextEntry} */ textEntry, i) =>
    Array.isArray(textEntry) ? (
      <li key={i}>{createList(textEntry, true)}</li>
    ) : isInsideList ? (
      listEntry(textEntry)
    ) : (
      <li key={i}>{listEntry(textEntry)}</li>
    )
  );

export default createList;
