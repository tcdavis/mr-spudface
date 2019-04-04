import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import DraggableElement from './DraggableElement'
import { Hat, Moustache, Glasses } from "./Decorations";

const {width, height} = Dimensions.get("window")

export class PotatoHead extends React.Component {
  state = {
    width: 0,
    height: 0
  }
  render() {
    const image = this.props.navigation.getParam('image');
    if (image) {
    return (
      <View style={styles.container} onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        this.setState({width, height});
      }}>
        { this.state.width ? (
          <>
          <Image style={[StyleSheet.absoluteFill, {height, width, resizeMode: 'cover'}]} source={image} />
          <DraggableElement  pos={{x: width / 3, y: height / 3}}>
            <Hat/>
          </DraggableElement>
          <DraggableElement pos={{x: 2 * width / 3, y: height / 2}}>
            <Moustache />
          </DraggableElement>
          <DraggableElement pos={{x: 2 * width / 3, y: height / 3}}>
            <Glasses />
          </DraggableElement>
          </>
        ) : null
         }
      </View>
    );

    } else {
      return <Text>Where's my face?</Text>
    }
  }
}

const CIRCLE_SIZE = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
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

