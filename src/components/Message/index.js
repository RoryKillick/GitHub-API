// == Import npm
import React from 'react';
import { Container, Segment } from 'semantic-ui-react'

// == Import
import './styles.css';

// == Composant
const Message = ({props}) => (
  <Container text>
    <Segment>
      Resultats
    </Segment>
  </Container>
);

// == Export
export default Message;
