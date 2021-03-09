import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import './App.css';
import Search from './search/Searchh';

function App() {
  return (
    <Provider store={store}>

      <div>
        <Search />
      </div>
    </Provider>
  );
}

export default App;
