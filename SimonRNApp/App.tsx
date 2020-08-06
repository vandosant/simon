/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef, useState}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [count, setCount] = useState(0);
  const red = useRef(

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.button}>
            <TouchableOpacity style={styles.red} ref={this.red} onPress={this.onPress} />
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.green} ref={this.green} onPress={this.onPress} />
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.yellow} ref={this.yellow} onPress={this.onPress} />
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.blue} ref={this.blue} onPress={this.onPress} />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '100%',
  },
  button: {
    flex: 1,
    flexGrow: 1,
  },
  red: {
    backgroundColor: 'rgb(255, 0, 0)',
    height: '100%'
  },
  green: {
    backgroundColor: 'rgb(0, 255, 0)',
    height: '100%'
  },
  yellow: {
    backgroundColor: 'rgb(255, 255, 0)',
    height: '100%'
  },
  blue: {
    backgroundColor: 'rgb(0, 0, 255)',
    height: '100%'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
