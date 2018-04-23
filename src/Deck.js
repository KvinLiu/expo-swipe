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
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }
  render() {
    const { panResponder, position } = this.state;
    return (
      <Animated.View style={position.getLayout()}>
        <View {...panResponder.panHandlers}>
          {this.renderCards()}
        </View>
      </Animated.View>


    );
  }
}

export default Deck;
