import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from 'Componets/ContactForm/ContactForm';
import ContactList from 'Componets/ContactList/ContactList';
import Filter from 'Componets/Filter/Filter';
import { Card } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleInputChange = e => {
    setFilter(e.target.value);
  };

  const addNewContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts([contact, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(prevState => prevState.id !== id));
    setFilter('');
  };

  const normalizedFilter = filter.toLowerCase();
  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <Card>
      <h1 className="title">Phonebook</h1>

      <ContactForm onAdd={addNewContact} />

      <h2 className="title">Contacts</h2>

      <Filter filter={filter} onChange={handleInputChange} />
      <ContactList contacts={findContacts} onDeleteContact={deleteContact} />
    </Card>
  );
}
