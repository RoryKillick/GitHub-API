// == Import npm
import React from 'react';

// == Import
import './styles.css';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Cards from 'src/components/Cards';


// == Composant
const App = () => (
  <div className="app">
    <SearchBar/>
    <Message/>
    <Cards/>
  </div>
);

// == Export
export default App;
