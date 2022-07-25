import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const navBotao = createStackNavigator();

import InfoJogo1 from '../pages/jogos/jogo1';


export default function RotasBotao(){
    return(
        <navBotao.Navigator>
            <navBotao.Screen name="jogo" component={InfoJogo1} options={{headerShown:false}} />
        </navBotao.Navigator>
    );
}