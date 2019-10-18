/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

import  ProgressCircle from './chart/progressCicle';
import BarChart from './chart/barChart';
import PieChart from './chart/pieChart';
import Gradient from './chart/areaChart';

export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <Text style={styles.instructions}>Progress bar</Text>
        <ProgressCircle />
        <Text style={styles.instructions}>Bar chart</Text>
        <BarChart />
        <Text style={styles.instructions}>Pie chart</Text>
        <PieChart />
        <Text style={styles.instructions}>Gradient</Text>
        <Gradient />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
