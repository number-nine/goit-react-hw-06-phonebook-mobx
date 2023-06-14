import { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { StoreContext } from 'index';

import {
  ListWrapper,
  PrivateContact,
  SharedContact,
} from './ContactsList.styled';
import { Button } from '../common.styled';

const ContactsList = observer(() => {
  const {
    auth: { isLoggedIn },
    filter: { filter },
    contacts: { contacts, remove },
  } = useContext(StoreContext);

  const visibleContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()) &&
      (!contact.isPrivate || isLoggedIn)
  );
  return visibleContacts.length === 0 ? (
    <p>Nothing to show</p>
  ) : (
    <ListWrapper>
      {visibleContacts.map(({ id, name, number, isPrivate }) => {
        return (
          <li key={id}>
            {name}: {number}
            {isLoggedIn &&
              (isPrivate ? (
                <PrivateContact>private</PrivateContact>
              ) : (
                <SharedContact>shared</SharedContact>
              ))}
            {isLoggedIn && (
              <Button type="button" onClick={() => remove(id)}>
                Delete
              </Button>
            )}
          </li>
        );
      })}
    </ListWrapper>
  );
});

export default ContactsList;
