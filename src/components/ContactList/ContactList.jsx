import Contact from 'components/Contact/Contact';
import { Component } from 'react';

export default class ContactList extends Component {
  render() {
    const { filter, contacts, deleteContacts } = this.props;
    return (
      <ul>
        {(filter !== '' ? filter : contacts).map(contact => (
          <Contact
            deleteContacts={deleteContacts}
            contact={contact}
            key={contact.id}
          />
        ))}
      </ul>
    );
  }
}
