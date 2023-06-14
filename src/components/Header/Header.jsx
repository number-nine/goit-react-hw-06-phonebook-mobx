import { useContext } from 'react';
import { StoreContext } from 'index';

import LoginForm from 'components/LoginForm';
import { NavLinkStyled, HeaderStyled } from './Header.styled';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
  const {
    auth: { isLoggedIn },
  } = useContext(StoreContext);

  return (
    <HeaderStyled>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {isLoggedIn && <NavLinkStyled to="/dashboard">Dashboard</NavLinkStyled>}
      </nav>
      <LoginForm />
    </HeaderStyled>
  );
});

export default Header;
