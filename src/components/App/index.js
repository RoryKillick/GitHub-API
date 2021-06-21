// == Import npm
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

// == Import
import './styles.scss';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import GitHubImage from 'src/components/GitHubImage';



// == Composant
const App = () => {

  //Fonctions

  const fetchRepos = () => {
    console.log('Repos fetched!!');

    setLoading(true);
    
    axios({
      method: 'get',
      url: 'https://api.github.com/search/repositories?q=react',
    })
    .then((res) => {
      console.log(res.data);
      setRepos(res.data);
    })
    .catch((e) => {
      console.log("erreur lors de la recup des repos", e);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  // Pas trop compris ici, le handle Input Change:
  const handleInputChange = (e) => (
    e.preventDefault()
  )


  const handleInputSubmit = () => (
    setOnInputSubmit(!onInputSubmit)
  )

  //Hooks
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState(['freeCodeCamp','React','React-native','create-react-app']);
  const [nbResults, setNbResults] = useState(5);
  const [searchInputValue, setSearchInputValue] = useState('React');
  const [onInputSubmit, setOnInputSubmit] = useState(false);
  // Pas trop compris ici:
  const [onInputChange, setOnInputChange] = useState(false);

  //UseEffect
  //Erreur lors du loading, list.map is not defined
  /* useEffect(fetchRepos, []); */


  //Render
  return(
    <div className="app">
      <GitHubImage/>
      <SearchBar
        searchInputValue={searchInputValue}
        onInputChange={handleInputChange}
        onInputSubmit={handleInputSubmit}
      />
      <Message
        nbResults={nbResults}
      />
      <ReposResults
        list={repos}
      />
    </div>
  )
};


// == Export
export default App;
