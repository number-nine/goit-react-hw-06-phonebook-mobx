import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useContext } from 'react';
import { StoreContext } from 'index';
import { observer } from 'mobx-react-lite';

import { FormStyled, ButtonStyled, LabelStyled } from './LoginForm.styled';

const LoginForm = observer(() => {
  const {
    auth: { isLoggedIn, login, logout, userName: currentUser },
  } = useContext(StoreContext);
  const handleSubmit = e => {
    e.preventDefault();
    if (isLoggedIn) {
      logout();
      return;
    }

    const userName = e.target.elements?.login.value.trim();
    if (!userName) {
      Notify.failure('Enter valid username');
      return;
    }
    login(userName);
    e.target.reset();
    return;
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled htmlFor="loginField">
        {isLoggedIn ? `Welcome, ${currentUser}` : 'Enter login'}
      </LabelStyled>
      {!isLoggedIn && (
        <input type="text" name="login" id="loginField" required />
      )}
      {!isLoggedIn && <ButtonStyled type="submit">Log In</ButtonStyled>}
      {isLoggedIn && <ButtonStyled type="submit">Log out</ButtonStyled>}
    </FormStyled>
  );
});

export default LoginForm;
