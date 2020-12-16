import React from 'react';
import Contact from '../Contact';

import './Contacts.scss';

function Contacts({ contacts }) {
  return (
    <section>
      {contacts.length > 0 ? (
        contacts.map((contact, i) => <Contact key={i} contact={contact} />)
      ) : (
        <div className="empty">No results</div>
      )}
    </section>
  );
}

export default Contacts;
