import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import ProvaBiologia from '../pages/ProvaBiologia';
import ProvaArtes from '../pages/ProvaArtes';
import HomeMaterias from '../pages/HomeMaterias';
import Materias from '../pages/Materias';
import Provas from '../pages/Provas'
import ComoPassar from '../pages/ComoPassar';
import { COLORS } from '../constants';


export default function NavRoutes(){

    const Tab = createBottomTabNavigator();
    const { Navigator, Screen} = createStackNavigator();

  function HomeTabs() {
      return (
        <Tab.Navigator 
          tabBarOptions={{showLabel:false}} initialRouteName={Home}         
          >

          <Tab.Screen name="Home" component={Home} options={{headerShown:false, 
          tabBarStyle:{
            position:'absolute',
            bottom:20,
            left:20,
            right:20,
            elevation:1,
            backgroundColor:'#FFCB77',
            borderRadius:20,
            height:90,},
              tabBarIcon:({size,color,focused})=>(
              <FontAwesome name="home" size={focused? 45 : 30} color={focused? COLORS.black:COLORS.blackOpc} />
              )}}/>
          <Tab.Screen name="Materias" component={HomeMaterias} options={{headerShown:false,
          tabBarStyle:{
            position:'absolute',
            bottom:25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:'#00A878',
            borderRadius:20,
            height:90,},
              tabBarIcon:({size,color,focused})=>(
              <FontAwesome name="book" size={focused? 45 : 30} color={focused? COLORS.black:COLORS.blackOpc}/>
              )}}/>
          <Tab.Screen name="Provas" component={Provas} options={{headerShown:false,
          tabBarStyle:{
            position:'absolute',
            bottom:25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:'#CF8BA9',
            borderRadius:20,
            height:90,},
              tabBarIcon:({size,color,focused})=>(
              <FontAwesome name="file-text" size={focused? 45 : 30} color={focused? COLORS.black:COLORS.blackOpc} />
              )}}/>
          <Tab.Screen name="Como Passar?" component={ComoPassar} options={{headerShown:false,
          tabBarStyle:{
            position:'absolute',
            bottom:25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:'#7EB2DD',
            borderRadius:20,
            height:90,},
              tabBarIcon:({size,color,focused})=>(
              <FontAwesome name="list-alt" size={focused? 45 : 30} color={focused? COLORS.black:COLORS.blackOpc} />
          )}}/>
        </Tab.Navigator>
      );
    }


   
    return(

     
           <Navigator initialRouteName='Home'>
               <Screen 
                 name="Home"
                 component={HomeTabs}
                 options={{headerShown: false}}
               />

                <Screen 
                 name="Cadastro"
                 component={Cadastro}
                 options={{headerShown: false}}
              /> 

                <Screen 
                 name="Quiz"
                 component={Quiz}
                 options={{headerShown: false}}
               />

               <Screen
                name="ProvaBiologia"
                component={ProvaBiologia}
                options={{headerShown: false}}
               />

              <Screen
                name="ProvaArtes"
                component={ProvaArtes}
                options={{headerShown: false}}
               />

              <Screen
                name="HomeMaterias"
                component={HomeMaterias}
                options={{headerShown: false}}
               />

              <Screen
                name="Materias"
                component={Materias}
                options={{headerShown: false}}
               />

              <Screen
                name="Provas"
                component={Provas}
                options={{headerShown: false}}
               />

                <Screen
                name="ComoPassar"
                component={ComoPassar}
                options={{headerShown: false}}
               />
           </Navigator>
    )

}