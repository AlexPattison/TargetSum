import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';

export default class RandomNumber extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
  };

  handlePress = () => console.log(this.props.number);

  render() {
    const { number, isSelected } = this.props;

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.randomNumber, this.props.isSelected && styles.selected]}>
          {number}
        </Text>
      </TouchableOpacity>
    );
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

  selected: {
    opacity: 0.3,
  },
});
