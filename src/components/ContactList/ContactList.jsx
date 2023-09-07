import Contact from 'components/Contact/Contact';
import { Component } from 'react';

export default class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return contacts.map(contact => (
      <ul key={contact.id}>
        <Contact contact={contact} />
      </ul>
    ));
  }
}
