// == Import npm
import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Proptypes from 'prop-types';


// == Import
import './styles.css';

// == Composant
const Message = (props) => (
  <Container text>
    <Segment>
      {console.log(props)}
      Resultats
    </Segment>
  </Container>
);


//PropTypes
Message.proptypes = {
  nbResults: Proptypes.number
}

// == Export
export default Message;
