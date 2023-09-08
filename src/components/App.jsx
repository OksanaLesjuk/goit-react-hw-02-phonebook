import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],

    filter: '',
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

  handleFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  deleteContacts = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm createContacts={this.createContacts} />

          <h2>Contacts</h2>

          <Filter handleFilter={this.handleFilter} filter={this.state.filter} />
          <ContactList
            contacts={this.state.contacts}
            deleteContacts={this.deleteContacts}
            filteredContacts={filteredContacts}
          />
        </div>
      </>
    );
  }
}

export default App;
