// == Import npm
import React from 'react';
import { Card } from 'semantic-ui-react';
import Proptypes from 'prop-types';


// == Import
import './styles.scss';


// == Composant
const ReposResults = ({list}) => (
<div className="container">
  <ul className="list">
    {
      list.map((name, index) => (
        <Card
          key={index}
          header={name}
        />
      ))
    }
  </ul>
</div>
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
