import { createContext } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from 'redux/store';

import App from 'components/App';
import './index.css';

import filterStore from 'stores/filterStore';

const MobxContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-06-phonebook-mobx">
      <MobxContext.Provider store={filterStore}>
        <App />
      </MobxContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
