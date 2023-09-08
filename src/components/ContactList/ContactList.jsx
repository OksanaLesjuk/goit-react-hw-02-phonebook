import Contact from 'components/Contact/Contact';
import { Component } from 'react';
import { ContactListStyling } from './ContactList.styled';

export default class ContactList extends Component {
  render() {
    const { contacts, filteredContacts, deleteContacts } = this.props;
    return (
      <ContactListStyling>
        {(filteredContacts ?? contacts).map(contact => (
          <Contact
            deleteContacts={deleteContacts}
            contact={contact}
            key={contact.id}
          />
        ))}
      </ContactListStyling>
    );
  }
}
