import Contact from 'components/Contact/Contact';
import { Component } from 'react';

export default class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    );
  }
}
