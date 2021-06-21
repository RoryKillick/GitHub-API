// == Import npm
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// == Import
import './styles.css';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import GitHubImage from 'src/components/GitHubImage';



// == Composant
const App = () => {

  /* const fetchRepos = () => {
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
  } */

  //Hooks
  /* const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]); */

  //UseEffect
  /* useEffect(fetchRepos, []); */


  //Render
  return(
    <div className="app">
      <GitHubImage/>
      <SearchBar
        searchInputValue={'React'}
        /* onChange={} */
        /* onSubmit={true} */
      />
      <Message
        nbResults={5}
      />
      <ReposResults
        list={[1,2,3,4,5,6,7]}
      />
    </div>
  )
};


// == Export
export default App;
