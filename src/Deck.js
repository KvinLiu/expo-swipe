import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder
} from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {}
    });

    // this.panResponder = panResponder;
    // this.position = position;
    this.state = { panResponder, position };
  }

  renderCards() {
    const { panResponder, position } = this.state;
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            style={position.getLayout()}
            {...panResponder.panHandlers}
            >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return this.props.renderCard(item);
    });
  }
  render() {

    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

export default Deck;
