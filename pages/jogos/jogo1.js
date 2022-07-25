import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { buscarTime1} from '../Model';


export default function ListarTimes({navigation}) {

  const [dadoslista, setdadosTimes] = useState([]);

  useEffect(async () => {
    const resp = await buscarTime1()
    setdadosTimes(resp);
  }, []);

  return (
    <View style={estilo.container}>

      <Text style={estilo.titulo}>Lista de Times</Text>

    <Text style={estilo.botaoTextoCadFruta}>Cadt</Text>
      
      <StatusBar style="auto" />
      
      <FlatList
        data={dadoslista}
        keyExtractor={dadoslista => dadoslista.codigoTimes}
        renderItem={({ item }) =>
          
            <View style={estilo.grupoTimes}>

              <Text style={estilo.textoBotaoFruta}>{item.nomeTime}</Text>
            

            </View>
        

        }
      />
    </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9c46a',
  },
  titulo: {
    fontSize: 30,
    color: "#2a9d8f",
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  grupoFrutas: {
    backgroundColor: '#2a9d8f',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoFruta: {
    fontSize: 20
  },
  textoBotaoValor: {
    fontSize: 20
  },
  botaoCadFruta:{
    backgroundColor: '#2a9d8f',
    margin: 15,
    padding: 5,
    borderRadius: 10,
  },
  botaoTextoCadFruta:{
    fontSize: 18
  }
});