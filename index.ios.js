/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';

export default class ReactNativeHello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          type="front"
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.startRecording.bind(this)}>[CAPTURE]</Text>
          <Text style={styles.capture} onPress={this.stopRecording.bind(this)}>[STOP]</Text>
        </Camera>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }

  startRecording() {
    this.camera.capture({
      mode: Camera.constants.CaptureMode.video,
      quality: Camera.constants.CaptureQuality["480p"],
    })
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  stopRecording() {
    this.camera.stopCapture()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
});

AppRegistry.registerComponent('ReactNativeHello', () => ReactNativeHello);
