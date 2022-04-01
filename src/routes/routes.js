import React from 'react';
import { NavigationContainer,  } from '@react-navigation/native';
import { createNativeStackNavigator,  } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import ProvaBiologia from '../pages/ProvaBiologia';
import ProvaArtes from '../pages/ProvaArtes';
import HomeMaterias from '../pages/HomeMaterias';
import Materias from '../pages/Materias';
import Provas from '../pages/Provas'
import ComoPassar from '../pages/ComoPassar';


export default function Routes(){

    const Drawer = createDrawerNavigator ();
    const { Navigator, Screen} = createNativeStackNavigator();

    function myDrawer () {
      return (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Como Passar" component={ComoPassar} />
        </Drawer.Navigator>
      );
    }
   
    return(

       <NavigationContainer>
           <Drawer.Navigator initialRouteName='Home'>
               <Drawer.Screen 
                 name="Home"
                 component={Home}
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

              <Drawer.Screen
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
           </Drawer.Navigator>
       </NavigationContainer>
    )

}