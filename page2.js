import React from 'react';
import { View, Text, Image } from 'react-native';

const page2 = () => {
    const {tit,btn,tit_w,like,mid,mid_w,line,img,img_2} = style;
    return(
        <View>
          <View style={[tit]}>
            <Image source={require('./img/btn_back.png')} style={[btn]} />
            <Text style={[tit_w]}>Hearthstone</Text>
            <Image source={require('./img/btn_like.png')} style={[btn,like]} />
          </View>
          <View style={[mid]}>
            <Text style={[mid_w]}>LIVE</Text>
            <Text style={[mid_w]}>RECENT</Text>
          </View>
          <View style={[line]}>
          </View>
          <View>
            <Image source={require('./img/img_firebat.png')} style={[img]} />
          </View>
          <View>
            <Image source={require('./img/img_forsen.png')} style={[img]} />
          </View>
          <View>
            <Image source={require('./img/img_kolento.png')} style={[img_2]} />
          </View>
        </View>
    );
};

const style = {
    tit:{
        width:375,
        height:64,
        backgroundColor:'rgb(100,65,165)',
        flexDirection:'row',
    },
    btn:{
        width:33,
        height:33,
        marginTop:25,
        marginLeft:8.5,
    },
    tit_w:{
        width:108,
        height:21.5,
        marginTop:30.5,
        marginLeft:92,
        color:'rgb(255,255,255)',
        fontSize:18,
    },
    like:{
        marginLeft:92,
    },
    mid:{
        flexDirection:'row',
        height:39,
    },
    mid_w:{
        textAlign:'center',
        width:187.5,
        marginTop:15,
        fontSize:13,
        color:'rgb(100,65,165)',
    },
    line:{
        height:5,
        width:187.5,
        backgroundColor:'rgb(100,65,165)',
    },
    img:{
        width:365,
        height:200,
        marginLeft:4.5,
        marginTop:5,
    },
    img_2:{
        width:365,
        height:144,
        marginLeft:4.5,
        marginTop:5,
    },
};

export default page2;