import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View,Image,ScrollView,TouchableOpacity, ImageBackgroundComponent } from 'react-native';





export default function Home() {
  return (
    
    <View  style={estilo.container}>
       
        <Image style={estilo.img2} source={require('../assets/logo.png')} />
       
      <ScrollView>
     
      <Image style={estilo.imagem} source={require('../assets/home1.png')} />
      <Image style={estilo.imagem2} source={require('../assets/regras.png')} />




      
      <Text style={estilo.Titulo}>Tenha acesso a transmissão ao vivo dos jogos</Text>


      <TouchableOpacity style={estilo.botao} onPress={this._handleOpenWithWebBrowse}>
      <Image style={estilo.imagem4} source={require('../assets/twitch2.jpg')} />
      </TouchableOpacity>
      
      <TouchableOpacity style={estilo.botao} onPress={this._handleOpenWithWebBrows}>
      <Image style={estilo.imagem3} source={require('../assets/adastr.png')} />
      </TouchableOpacity>

     

      <TouchableOpacity style={estilo.botao} onPress={this._handleOpenWithWebBrowser}>
      <Image style={estilo.imagem4} source={require('../assets/insta.png')} />
      </TouchableOpacity>
      
     


        <StatusBar style="auto" />
        </ScrollView>
    </View>
    
    
    
  );
}

_handleOpenWithWebBrows = () => {
  WebBrowser.openBrowserAsync('https://majorcampeonatocsgo.azurewebsites.net/');
};

_handleOpenWithWebBrowse = () => {
  WebBrowser.openBrowserAsync('https://www.twitch.tv/esl_csgo');
};

_handleOpenWithWebBrowser = () => {
  WebBrowser.openBrowserAsync('https://www.instagram.com/invites/contact/?i=xgd8qi2d6qeg&utm_content=op7b02v');
};


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#390099',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem:{
    flex:1,
    width:380,
    height:220,
    marginTop: 40,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    
  },
  img2: {
    width: 395,
    height: 100,
  },
  imagem2:{
    flex:1,
    width:380,
    height:100,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
   
   
  },
  Titulo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',

    marginTop: 10,
    color: 'white',
  },
  imagem3:{
    flex:1,
    width:200,
    height:60,
    borderRadius:20,
    marginLeft:90,
    marginTop:30
  },
  imagem4:{
    flex:1,
    width:200,
    height:60,
    borderRadius:20,
    marginLeft:90,
    marginTop:30
  },
  img5: {
    width: 395,
    height: 1000,
    opacity:10
    
  },
});
