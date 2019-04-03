import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import DraggableElement from './DraggableElement'

const { width, height } = Dimensions.get("window");

export class PotatoHead extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DraggableElement style={styles.car} pos={{x: width / 3, y: height / 3}}/>
        <DraggableElement style={styles.box} pos={{x: 2 * width / 3, y: 2 * height / 3}}/>
      </View>
    );
  }
}

const CIRCLE_SIZE = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "tomato",
    marginLeft: -(CIRCLE_SIZE / 2),
    marginTop: -(CIRCLE_SIZE / 2),
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderColor: "#000"
  },
  car: {
    backgroundColor: "blue",
    marginLeft: -(CIRCLE_SIZE / 2),
    marginTop: -(CIRCLE_SIZE / 2),
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderColor: "#000"
  },

});

