import authStore from './authStore';
import contactsStore from './contactsStore';
import filterStore from './filterStore';
// import { injectStores } from '@mobx-devtools/tools';

// injectStores({
//   filterStore,
//   contactsStore,
//   authStore,
// });

class RootStore {
  filter = filterStore;
  contacts = contactsStore;
  auth = authStore;
}

export default RootStore;
