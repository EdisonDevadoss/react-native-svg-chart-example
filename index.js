/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import CircleChart from './chart/circle';
import BarChart from './chart/barChart';
import AreaChart from './chart/areaChart';


import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => BarChart);
