import React from 'react';
import { View, Text, Image, StatusBar} from 'react-native';


const page1 = () => {
    const {pur,word} = style;
    return(
        <View style={[pur]}>
          <StatusBar hidden />
          <Image source={require('./img/logo_twitch.png')} style={[word]} />
        </View>
    );
};

const style = {
    word:{
        width:185.5,
        height:61.5,
        marginTop:273,
        marginLeft:95.5,
    },
    pur:{
        backgroundColor:'rgb(100,65,165)',
        width:375,
        height:675,
    }    
};

export default page1;