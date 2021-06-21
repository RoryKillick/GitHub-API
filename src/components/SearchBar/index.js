// == Import npm
import React from 'react';
import { Button,Icon, Input } from 'semantic-ui-react';
import Proptypes from 'prop-types';

// == Import
import './styles.css';


// == Composant
const SearchBar = (props) => (
  <div>
    {console.log(props)}
    <Input icon placeholder='Search...'>
      <Button>Click Here</Button>
      <input />
      <Icon name='search' />
    </Input>
  </div>
);

//Proptypes
SearchBar.proptypes = {
  Input: Proptypes.string.isRequired
}

// == Export
export default SearchBar;
