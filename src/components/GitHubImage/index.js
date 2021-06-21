import React from 'react';
import { Image } from 'semantic-ui-react';

import logo from './logo-github.png';
import './styles.scss';


const GitHubImage = () => (
  <Image className='img' src={logo} size='small' />
);

export default GitHubImage;
