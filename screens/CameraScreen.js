import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';
import { WebBrowser, Camera } from 'expo';

import { MonoText } from '../components/StyledText';

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _takePicture = () => camera.captureImage
  render() {
    return (
      <View style={styles.main}>
        <Camera style={styles.camera}/>
        <Button title="potato!" onPress={this._takePicture}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  camera: {
    width: '100%',
    height: '90%'
  }
})
