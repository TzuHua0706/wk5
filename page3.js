import React from 'react';
import { View, Text, Image,StatusBar} from 'react-native';

const page3 = () => {
    const {tit,search,search_img,search_img_2,search_w,row,line,img,footer,btn,footer_w_pur,footer_w} = style;
    return(
        <View>
          <StatusBar barStyle='light-content' />
          <View style = {[tit,row]}>
            <View style = {[search,row]}>
              <Image source={require('./img/icon_search.png')} style={[search_img]} />
              <Text style = {[search_w]}>Search</Text>
            </View>
              <Image source={require('./img/btn_cast.png')} style={[search_img_2]} />
          </View>
          <View style = {[row]}>
            <Image source={require('./img/img_leagueoflegends.png')} style={[img]} />
            <Image source={require('./img/img_counterstrike.png')} style={[img]} />
          </View>
          <View style = {[row]}>
            <Image source={require('./img/img_hearthstone.png')} style={[img]} />
            <Image source={require('./img/img_dota2.png')} style={[img]} />
          </View>
          <View style = {[row]}>
            <Image source={require('./img/img_h1z1.png')} style={[img]} />
            <Image source={require('./img/img_destiny.png')} style={[img]} />
          </View>
          <View style = {[line]}></View>
          <View style = {[footer,row]}>
            <View>
              <Image source={require('./img/btn_games_selected.png')} style={[btn]} />
              <Text style = {[footer_w_pur]}>Games</Text>
            </View>
            <View>
              <Image source={require('./img/btn_channels.png')} style={[btn]} />
              <Text style = {[footer_w]}>Channels</Text>
            </View>
            <View>
              <Image source={require('./img/btn_following.png')} style={[btn]} />
              <Text style = {[footer_w]}>Following</Text>
            </View>
            <View>
              <Image source={require('./img/btn_me.png')} style={[btn]} />
              <Text style = {[footer_w]}>Me</Text>
            </View>
          </View>
        </View>
    );
};

const style = {
    tit:{
        width:375,
        height:64,
        backgroundColor:'rgb(100,65,165)',
    },
    search:{
        width:320,
        height:30,
        marginTop:26.5,
        marginLeft:8.5,
        backgroundColor:'rgb(49,31,83)',
        borderRadius:5,
    },
    search_img:{
        width:18,
        height:18,
        marginTop:6,
        marginLeft:8.5,
    },
    search_img_2:{
        width:33,
        height:33,
        marginTop:25,
        marginLeft:5,
    },
    search_w:{
        width:49.5,
        height:18,
        marginTop:5,
        marginLeft:5.5,
        fontSize:15,
        color:'rgb(185,163,227)',
    },
    row:{
        flexDirection:'row',
    },
    img:{
        width:180,
        height:180,
        marginTop:5,
        marginLeft:5,
    },
    line:{
        width:375,
        height:0.5,
        backgroundColor:'rgba(0,0,0,0.2)',
        marginTop:-1,
    },
    footer:{
        marginLeft:0.5,
    },
    btn:{
        width:93.5,
        height:49,
    },
    footer_w_pur:{
        textAlign:'center',
        marginTop:-14,
        fontSize:10,
        color:'rgb(100,65,165)',
    },
    footer_w:{
        textAlign:'center',
        marginTop:-14,
        fontSize:10,
        color:'rgb(187,187,187)',
    },
};

export default page3;