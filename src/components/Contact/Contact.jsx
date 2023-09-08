const Contact = ({ contact, deleteContacts }) => {
  return (
    <div>
      <li>
        {contact.name}:{contact.number}
      </li>
      <button onClick={() => deleteContacts(contact.id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
