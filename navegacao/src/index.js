// src/index.js

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';


import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Page1,
    Novo: Page2,
    Historico: Page3,
    Grupos: Page4,
  })
);

export default Routes;