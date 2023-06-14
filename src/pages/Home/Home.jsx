import { useContext } from 'react';

import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import ContactEditor from 'components/ContactEditor';
import { StoreContext } from 'index';

import { Container } from 'pages/Pages.styled';
import { observer } from 'mobx-react-lite';

const Home = observer(() => {
  const {
    auth: { isLoggedIn },
  } = useContext(StoreContext);

  return (
    <Container>
      {isLoggedIn && (
        <Section title="Add Contact">
          <ContactEditor />
        </Section>
      )}
      <Section title="Filter Contacts">
        <Filter />
      </Section>
      <Section title="Contacts List">
        <ContactsList />
      </Section>
    </Container>
  );
});

export default Home;
