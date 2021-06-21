// == Import npm
import React from 'react';

// == Import
import './styles.css';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Cards from 'src/components/Cards';
import GitHubImage from 'src/components/GitHubImage';



// == Composant
const App = () => {

  return(
    <div className="app">
      <GitHubImage/>
      <SearchBar
        /* searchInputValue={props}
        onSubmit={props} */
      />
      <Message
        /* nbResults={props} */
      />
      <Cards/>
    </div>
  )
};


// == Export
export default App;
