// == Import npm
import React from 'react';
import { Icon, Input, Segment } from 'semantic-ui-react';
import Proptypes from 'prop-types';

// == Import
import './styles.scss';


// == Composant
const SearchBar = (props) => (
  <div>
    {console.log(props)}
    <Segment>
      <Input className='input'icon fluid placeholder='Search...' iconPosition='left'>
        <input />
        <Icon name='search' />
      </Input>
    </Segment>
  </div>
);

//Proptypes
SearchBar.proptypes = {
  Input: Proptypes.string.isRequired
}

// == Export
export default SearchBar;
