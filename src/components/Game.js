import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.target}>42</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex: 1,
  },

  target: {
    backgroundColor: 'antiquewhite',
    fontSize: 40,
    margin: 20,
    textAlign: 'center',
  },
});
