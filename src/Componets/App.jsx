import { Component } from 'react';
import shortid from 'shortid';
import ContactForm from 'Componets/ContactForm/ContactForm';
import ContactList from 'Componets/ContactList/ContactList';
import Filter from 'Componets/Filter/Filter';
import { Card } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addNewContact = person => {
    const contact = {
      id: shortid.generate(),
      name: person.name,
      number: person.number,
    };
    if (this.state.contacts.find(contact => contact.name === person.name)) {
      alert(`${person.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(person => person.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('обновилось');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const findContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <Card>
        <h1 className="title">Phonebook</h1>

        <ContactForm onAdd={this.addNewContact} />

        <h2 className="title">Contacts</h2>

        <Filter filter={filter} onChange={this.handleInputChange} />
        <ContactList
          contacts={findContacts}
          onDeleteContact={this.deleteContact}
        />
      </Card>
    );
  }
}
