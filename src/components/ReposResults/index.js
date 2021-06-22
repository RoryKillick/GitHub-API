// == Import npm
import React from 'react';
import { Card } from 'semantic-ui-react';
import Proptypes from 'prop-types';


// == Import
import './styles.scss';


// == Composant
const ReposResults = ({list}) => {
  return (
    <div>
      <Card.Group>
        {
          list.map((name, index) => (
            <Card
              key={index}
              header={name}
            />
          ))
        }
      </Card.Group>
    </div>
  )
}


//Proptypes
ReposResults.proptypes = {
  list: Proptypes.arrayOf(Proptypes.shape({
    name: Proptypes.string,
    index: Proptypes.number
  })).isRequired,
};

// == Export
export default ReposResults;
