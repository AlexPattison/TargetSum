import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import RandomNumber from './RandomNumber';

export default class Game extends Component {
  // TODO: Randomize order. Leaving this way for now for easy testing.
  randomNumbers = Array.from({ length: this.props.randomNumberCount }).map(() =>
    Math.ceil(Math.random() * 10)
  );

  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 3)
    .reduce((acc, cur) => acc + cur, 0);

  state = {
    selectedNumbers: [0, 4],
  };

  isSelected = index => this.state.selectedNumbers.indexOf(index) >= 0;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.targetContainer}>
          <Text style={styles.target}>{this.target}</Text>
        </View>

        {this.randomNumbers.map((num, idx) => {
          if (idx % 2 === 1) {
            return (
              <View style={styles.childContainer} key={idx}>
                <RandomNumber
                  key={idx - 1}
                  number={this.randomNumbers[idx - 1]}
                  isSelected={this.isSelected(idx - 1)}
                />
                <RandomNumber key={idx} number={num} isSelected={this.isSelected(idx)} />
              </View>
            );
          }
        })}
      </View>
    );
  }
}

Game.propTypes = {
  randomNumberCount: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },

  targetContainer: {
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    flex: 4,
  },

  target: {
    backgroundColor: 'antiquewhite',
    textAlign: 'center',
    marginHorizontal: 50,
    fontSize: 60,
  },

  childContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 3,
    backgroundColor: 'steelblue',
  },
});
