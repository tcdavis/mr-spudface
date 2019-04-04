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
import { WebBrowser, Camera, Permissions } from 'expo';

import { MonoText } from '../components/StyledText';

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    hasPermission: null,
  }

  async componentDidMount() {
    const { status  } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' })
  }

  _takePicture = async () => {
    const image = await this.camera.takePictureAsync()
    console.log('new potato!');
    this.props.navigation.navigate('Links', {image})
  }

  render() {
    if (this.state.hasPermission === null) {
      return <Text>Waiting for Permission</Text>
    } else if (this.state.hasPermission === false) {
      return <Text>No Permission</Text>
    } else {
      return (
      <View style={styles.main}>
        <Camera
          style={styles.camera}
          ref={ref => {this.camera = ref}}
          type={Camera.Constants.Type.front}
        />
        <Button title="potato!" onPress={this._takePicture}/>
      </View>
    );
     }
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
