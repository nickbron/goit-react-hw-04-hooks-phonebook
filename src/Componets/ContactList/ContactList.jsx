import PropTypes from 'prop-types';
import { Button } from '../ContactList/ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
              <Button onClick={() => onDeleteContact(contact.id)} type="button">
                Delete
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Contact list is empty</p>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  //   onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
