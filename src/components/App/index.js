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
import data from '../../data/repos'



// == Composant
const App = () => {

  //State
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState(['react','javascript', 'airbnb']);
  const [nbResults, setNbResults] = useState(0);
  const [searchInputValue, setSearchInputValue] = useState("react");
  const [onInputSubmit, setOnInputSubmit] = useState(false);
  // Pas trop compris ici:
  const [onSearchChange, setOnSearchChange] = useState(false);


  //UseEffect
  //Erreur lors du loading, list.map is not defined
 /*  useEffect(fetchRepos, [loading]); */
  //avec loading en parmetres a chaque loading



  //Fonctions

  const fetchRepos = () => {
    console.log('Repos fetched!!');

    setLoading(true);
    axios({
      method: 'get',
      url: `https://api.github.com/search/repositories?q=${searchInputValue}`,
      //&sort=stars&order=desc&page=1&per_page=9
    })
    .then((res) => {
      console.log(res.data);
      setRepos(res.data.items);
      setNbResults(res.data.)
    })
    .catch((e) => {
      console.log("erreur lors de la recup des repos", e);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  // Pas trop compris ici, le handle Input Change:
  const handleInputChange = (textSaisie) => {
    console.log(textSaisie);
    return setSearchInputValue(textSaisie);
  }



  const handleInputSubmit = () => {
    fetchRepos();
  }


  //Render
  return(
    <div className="app">
      <GitHubImage/>
      <SearchBar
        searchInputValue={searchInputValue}
        onInputChange={handleInputChange}
        onInputSubmit={handleInputSubmit}
        loading ={loading}
      />
      <Message
        content={`Il y a eu ${nbResults} résultats`}
      />
      <ReposResults
        list={repos}
      />
    </div>
  )
};


// == Export
export default App;
