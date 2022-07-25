import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Trispace_800ExtraBold,
  Literata_900Black_Italic,
  SairaStencilOne_400Regular
} from '@expo-google-fonts/dev';

export default function App() {
  const [fontsloaded] = useFonts({
    Trispace_800ExtraBold,
    Literata_900Black_Italic,
    SairaStencilOne_400Regular
  });

  if (!fontsloaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={estilo.container}>
        <Image style={estilo.img2} source={require('../assets/logo.png')} />

        <ScrollView style={estilo.fotos}>

          <Text style={estilo.Titulo}>Noticias</Text>

          <Text style={estilo.legenda2}>Notícia notícia notícia notícia</Text>
          <TouchableOpacity style={estilo.botao} onPress={()=> noticias()}>
          <Image style={estilo.img} source={require('../assets/noticias.jpg')} />
          </TouchableOpacity>
         
          <Text style={estilo.legenda2}>Notícia</Text>
          <TouchableOpacity style={estilo.botao} onPress={()=> noticias()}>
          <Image style={estilo.img} source={require('../assets/noticias.jpg')} />
          </TouchableOpacity>
       
          <Text style={estilo.legenda2}>Notícia</Text>
          <Image style={estilo.img} source={require('../assets/noticias.jpg')} />
         
          <Text style={estilo.legenda2}>Notícia</Text>
          <Image
            style={estilo.img}
            source={require('../assets/noticias.jpg')}
          />
          
        </ScrollView>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#390099',
  },

  frase: {
    fontSize: 20,
    paddingBottom: 15,
    fontFamily: 'SairaStencilOne_400Regular',
    textAlign: 'left',
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
  },
  frase2: {
    fontSize: 40,
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Trispace_800ExtraBold',
    marginLeft: 10,
  },

  img: {
    width: 350,
    height: 115,
    marginBottom: 15,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
    
    
  },

  img2: {
    width: 395,
    height: 95,
  },

  Titulo: {
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 10,
    fontFamily: 'Trispace_800ExtraBold',
    color: 'white',
  },

  legenda2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    backgroundColor: 'white',
    color: 'black',
    marginTop:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
   
  },

  fotos: {
    
    fontFamily: 'Trispace_800ExtraBold',
  },
});