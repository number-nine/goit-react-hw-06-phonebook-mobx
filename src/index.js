import { createContext } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';
import './index.css';

// import filterStore from 'stores/filterStore';
import RootStore from 'stores/rootStore';

export const StoreContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-06-phonebook-mobx">
      <StoreContext.Provider value={new RootStore()}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
