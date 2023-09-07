const Contact = ({ contact }) => {
  return (
    <div>
      <li>
        {contact.name}:{contact.number}
      </li>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
