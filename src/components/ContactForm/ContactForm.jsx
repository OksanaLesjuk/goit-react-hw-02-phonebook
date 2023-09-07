import { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.createContacts(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          Name
          <input
            onChange={this.handleInput}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.handleInput}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit"> Add contact</button>
      </form>
    );
  }
}
