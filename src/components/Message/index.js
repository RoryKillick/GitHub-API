// == Import npm
import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Proptypes from 'prop-types';


// == Import
import './styles.scss';

// == Composant
const Message = (props) => (
  <Segment>
      <Container text>
      {console.log(props)}
      Resultats
      </Container>
  </Segment>
);


//PropTypes
Message.proptypes = {
  nbResults: Proptypes.number
}

// == Export
export default Message;
