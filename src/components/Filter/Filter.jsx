import React, { Component } from 'react';

export default class Filter extends Component {
  state = { filterQuery: '' };
  handleFilter = ({ target: { name, value } }) => {
    this.props.filterContacts(value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input
          onChange={this.handleFilter}
          value={this.state.filter}
          type="text"
          name="filterQuery"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
    );
  }
}
