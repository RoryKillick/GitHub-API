// == Import npm
import React from 'react';
import { Input } from 'semantic-ui-react';
import Proptypes from 'prop-types';

// == Import
import './styles.css';


// == Composant
const SearchBar = ({props}) => (
  <Input placeholder='Search...' />
);

SearchBar.proptypes = {
  Input: Proptypes.string.isRequired
}

// == Export
export default SearchBar;
