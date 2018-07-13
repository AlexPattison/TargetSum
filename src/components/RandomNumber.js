import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';

export default class RandomNumber extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  handlePress = () => {
    if (this.props.isDisabled) return;
    this.props.onPress(this.props.id);
  };

  render() {
    const { number, isDisabled } = this.props;

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.randomNumber, isDisabled && styles.disabled]}>{number}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  randomNumber: {
    marginHorizontal: 50,
    backgroundColor: 'antiquewhite',
    textAlign: 'center',
    fontSize: 40,
    height: 50,
    width: 120,
  },

  disabled: {
    opacity: 0.3,
  },
});
