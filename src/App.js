import React, { useEffect, useState } from 'react';
import Search from './Search';
import Contacts from './Contacts';

import './App.scss';

const App = () => {
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState([]);

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function fetchContacts() {
      if (search) {
        await fetch(`https://jsonplaceholder.typicode.com/users?name=${search}`)
          .then((response) => response.json())
          .then((data) => setContacts(data));
      } else {
        await fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((data) => setContacts(data));
      }
    }
    fetchContacts();
  }, [search]);

  return (
    <main className="App">
      <article className="container">
        <Search search={search} onSearch={onSearch} />
        <Contacts contacts={contacts} />
      </article>
    </main>
  );
};

export default App;
