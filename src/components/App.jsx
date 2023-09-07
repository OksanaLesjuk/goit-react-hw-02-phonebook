import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  createContacts = dataForm => {
    const existingContact = this.state.contacts.find(
      contact => contact.name === dataForm.name
    );

    if (existingContact) {
      return alert(`${dataForm.name} is already in contacts`);
    }
    const newContact = {
      ...dataForm,
      id: nanoid(),
    };

    this.setState(prev => ({
      contacts: [newContact, ...prev.contacts],
    }));
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm createContacts={this.createContacts} />

          <h2>Contacts</h2>

          <Filter />
          <ContactList contacts={this.state.contacts} />
        </div>
      </>
    );
  }
}

export default App;
