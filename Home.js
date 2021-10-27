import React from 'react'
import { TouchableOpacity, View, Image, Dimensions } from 'react-native'
// import Images from './Images'
const images = [
    {url: require('./assets/img1.jpg')},
    {url: require('./assets/img2.jpg')},
    {url: require('./assets/img3.jpg')},
    {url: require('./assets/img4.jpg')},
    {url: require('./assets/img5.jpg')},
    {url: require('./assets/img6.jpg')},
    {url: require('./assets/img7.jpg')},
]

export const Home = () => {
    
    console.log(images);
    let height = Dimensions.get('window').height
    let width = Dimensions.get('window').width
    return (
        <View>
            {/* {
            images.map((image, index) => {
                console.log(image);
                <TouchableOpacity key = {index} onPress= 
                {() => {}}>
                    <Image source = {image.url} 
                    style= {{height: height / 3,
                        width: width / 3,
                        borderRadius: 10, margin: 2
                        }
                    }
                        />
                </TouchableOpacity>
            })
            } */}
            <Image source = {require('./assets/icon.png')} />
        </View>
        
    )
}
