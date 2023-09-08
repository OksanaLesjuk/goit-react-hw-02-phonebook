import React, { Component } from 'react';

export default class Filter extends Component {
  state = { filterQuery: '' };

  handleFilter = ({ target: { value } }) => {
    this.setState(
      {
        filterQuery: value,
      },
      () => {
        this.props.filterContacts(this.state.filterQuery);
      }
    );
  };

  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input
          onChange={this.handleFilter}
          value={this.state.filterQuery}
          type="text"
          name="filterQuery"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
    );
  }
}
