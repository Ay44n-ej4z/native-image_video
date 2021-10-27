import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import ImageModal from 'react-native-image-modal';
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import Images from './Images'
function App() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style = {{ flexDirection: 'row', flexWrap: 'wrap',}}>
        {/* <View style = {{margin: '10px', flexWrap: 'wrap', flexDirection: 'row', }}> */}
      {Images.map((list, index) => {
        
        return <ImageModal
        key = {index}
        resizeMode="contain"
        imageBackgroundColor="#fffff" source = {{uri: list.url}} 
           style={{width: 200, height: 100, flexDirection: 'row', margin: '10px'}}
           
          />
      })}
      <View style = {{margin: '10px'}}>
      <VideoPlayer 
      
          resizeMode="contain"
          isLooping
      style = {{width: 200, height: 100}}
      videoProps={{
        
        usePoster : {uri: require('./assets/sam.jpg')},
    shouldPlay: false,
    resizeMode: Video.RESIZE_MODE_CONTAIN,
    inFullscreen: false,
      visible: true,
      // useNativeControls : true,
      volume: true,
    onTouchEnd: true,
    // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
    source: {
      uri: require('./assets/vid.mp4'),
      
    },
  }}
/>
    </View> 
    </View>

  );
}
export default App;

