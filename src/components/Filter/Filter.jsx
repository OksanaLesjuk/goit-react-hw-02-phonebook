import React from 'react';

const Filter = () => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        // onChange={this.handleInput}
        // value={this.state.name}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
};

export default Filter;
