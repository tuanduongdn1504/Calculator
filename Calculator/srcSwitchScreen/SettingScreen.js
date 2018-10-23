import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Button
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import _ from 'lodash';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
var { height, width } = Dimensions.get('window');
class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: ''
    };
  }

  onUpLoadImg = () => {
    /**
     * The first arg is the options object for customization
        (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    //     // Launch Camera:
    // ImagePicker.launchCamera(options, (response)  => {
    //   // Same code as in above section!
    // });
    // // Open Image Library:
    // ImagePicker.launchImageLibrary(options, (response)  => {
    //   // Same code as in above section!
    // });
    ImagePicker.showImagePicker(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imageSource: source
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewItem}>
          <View style={styles.viewGroupImg}>
            <View style={styles.viewLabel}>
              <Text>Đăng hình ảnh (nếu có)</Text>
            </View>
            <TouchableOpacity
              style={styles.viewButtonUpLoad}
              onPress={() => this.onUpLoadImg()}
            >
              <Text style={{ color: 'blue' }}>Chọn ảnh</Text>
            </TouchableOpacity>
          </View>
        </View>
        {!_.isEmpty(this.state.imageSource) && (
          <Image
            source={{ uri: `${this.state.imageSource.uri}` }}
            style={styles.upLoadImg}
            resizeMode="cover"
          />
        )}
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  upLoadImg: {
    width: width - 200,
    height: width - 200,
    marginHorizontal: 160 / 2
  }
});

export default SettingScreen;
