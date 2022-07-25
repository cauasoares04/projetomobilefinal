import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "./Home.js";
import Pesquisa from "./Confrontos.js";
import Noticias from "./Eventos.js"
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
   <Tab.Navigator initialRouteName="Home"  screenOptions={{headerShown:false}} tabBarOptions={{style:{backgroundColor:'#390099'}}}>

        <Tab.Screen
            name="Noticias"
            component={Noticias}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="newspaper-variant" color=
                {'black'} size={size}/>}}
       />
       
       <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color=
                {'black'} size={size}/>}}
       />

        <Tab.Screen
           
            name="Confrontos"
            component={Pesquisa}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="gamepad-variant" color=
                {'black'} size={size}/>}}
            
       />

            

   </Tab.Navigator>
  );
}
