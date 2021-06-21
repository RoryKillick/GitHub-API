// == Import npm
import React from 'react';
import { Card } from 'semantic-ui-react';
import Proptypes from 'prop-types';


// == Import
import './styles.css';


// == Composant
const ReposResults = ({list}) => (
<ul>
  {
    list.map((name, index) => (
      <Card
        key={index}
        header={name}
      />
    ))
  }
</ul>
);

//Proptypes
ReposResults.proptypes = {
  list: Proptypes.arrayOf(Proptypes.shape({
    name: Proptypes.string,
    index: Proptypes.number
  })),
};

// == Export
export default ReposResults;
