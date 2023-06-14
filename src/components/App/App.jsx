import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import { StoreContext } from 'index';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const {
    auth: { isLoggedIn },
  } = useContext(StoreContext);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
});

export default App;
