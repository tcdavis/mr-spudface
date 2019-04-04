import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const { cond, eq, add, set, Value, event } = Animated;

export default class DraggableElement extends React.Component {
    dragX = new Value(0);
    dragY = new Value(0);
    offsetX = new Value(this.props.pos.x);
    offsetY = new Value(this.props.pos.y);

    gestureState = new Value(-1);
    onGestureEvent = event([
      {
        nativeEvent: {
          translationX: this.dragX,
          translationY: this.dragY,
          state: this.gestureState,
        },
      },
    ]);

    transX = cond(
      eq(this.gestureState, State.ACTIVE),

      add(this.offsetX, this.dragX),
      set(this.offsetX, add(this.offsetX, this.dragX)),
    );
    transY = cond(
      eq(this.gestureState, State.ACTIVE),

      add(this.offsetY, this.dragY),
      set(this.offsetY, add(this.offsetY, this.dragY)),
    );


  render() {
    return (
      <View style={styles.container}>
        <PanGestureHandler
          maxPointers={1}
          onGestureEvent={this.onGestureEvent}
          onHandlerStateChange={this.onGestureEvent}
        >
          <Animated.View
            style={[
              this.props.style,
              {
                transform: [
                  {translateX: this.transX},
                  {translateY: this.transY},
                ],
              },
            ]}
            children={this.props.children}
          />
        </PanGestureHandler>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

