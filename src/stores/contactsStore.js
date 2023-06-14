import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

import predefinedContacts from 'controllers/local-data-provider';

class ContactsStore {
  contacts = [];

  constructor() {
    makeAutoObservable(this);
    this.contacts = predefinedContacts.map(contact => ({
      ...contact,
      id: nanoid(),
    }));
  }

  add = value => {
    this.contacts.push({ ...value, id: nanoid() });
  };

  remove = id => {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  };
}

const contactsStore = new ContactsStore();

export default contactsStore;
