import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';

export default class RandomNumber extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
  };

  render() {
    const { number } = this.props;

    return <Text style={styles.randomNumber}>{number}</Text>;
  }
}

const styles = StyleSheet.create({
  randomNumber: {
    marginHorizontal: 50,
    width: 50,
    backgroundColor: 'antiquewhite',
    textAlign: 'center',
    fontSize: 40,
    height: 50,
    width: 120,
  },
});
