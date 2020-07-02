/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// import App from './src/navigation/navigationParams';
// import App from './src/title/titleButton';
// import App from './src/title/titleButton';
// import App from './src/bottomNavigation/';
// import App from './src/fullScreen/fullScreen';
// import App from './src/auth/authScreen';
import App from './src/tab/tabNavigation';

AppRegistry.registerComponent(appName, () => App);
