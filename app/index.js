import React from 'react';
import { render } from 'react-dom';

import Shout from './components/Shout';

render(
  <Shout name={'world'} />,
  document.querySelector('#app')
);
