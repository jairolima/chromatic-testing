import { addons } from '@storybook/addons';

import customTheme from './custom-theme.js';
import './shell.css';

addons.setConfig({
  theme: customTheme,
});