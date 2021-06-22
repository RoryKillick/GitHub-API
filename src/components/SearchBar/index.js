// == Import npm
import React from 'react';
import { Icon, Form, Input, Segment } from 'semantic-ui-react';
import Proptypes from 'prop-types';

// == Import
import './styles.scss';


// == Composant
const SearchBar = (props) => (
  <div>
    {console.log(props)}
    <Segment>
      <Form.Input className='input' 
        icon='search'
        fluid 
        placeholder='Search...'
        value={searchText}
        loading={loading}
        iconPosition='left'
        onInputChange={(evt) => {
          const textSaisie = evt.target.value;
          onInputChange(textSaisie);
        }}
      />
    </Segment>
  </div>
);

//Proptypes
SearchBar.proptypes = {
  Input: Proptypes.string.isRequired
}

// == Export
export default SearchBar;
