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
    selectedIds: [],
  };

  selectNumber = index => {
    this.setState(prevState => ({
      selectedIds: [...prevState.selectedIds, index],
    }));
  };

  gameStatus = () => {
    const selectedSum = this.state.selectedIds.reduce(
      (acc, curr) => acc + this.randomNumbers[curr],
      0
    );

    if (selectedSum < this.target) {
      return 'PLAYING';
    }

    if (selectedSum === this.target) {
      return 'WON';
    }

    if (selectedSum > this.target) {
      return 'LOST';
    }
  };

  isSelected = index => this.state.selectedIds.indexOf(index) >= 0;

  render() {
    const gameStatus = this.gameStatus();
    return (
      <View style={styles.container}>
        <View style={styles.targetContainer}>
          <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>{this.target}</Text>
        </View>

        {this.randomNumbers.map((num, idx) => {
          if (idx % 2 === 1) {
            return (
              <View style={styles.childContainer} key={idx}>
                <RandomNumber
                  key={idx - 1}
                  id={idx - 1}
                  number={this.randomNumbers[idx - 1]}
                  isDisabled={this.isSelected(idx - 1) || gameStatus !== 'PLAYING'}
                  onPress={this.selectNumber}
                />
                <RandomNumber
                  key={idx}
                  id={idx}
                  number={num}
                  isDisabled={this.isSelected(idx) || gameStatus !== 'PLAYING'}
                  onPress={this.selectNumber}
                />
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

  STATUS_PLAYING: {
    backgroundColor: 'antiquewhite',
  },

  STATUS_WON: {
    backgroundColor: 'green',
  },

  STATUS_LOST: {
    backgroundColor: 'red',
  },
});
