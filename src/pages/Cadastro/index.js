import React from 'react';
import {useContext, useState} from 'react'
import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import UserContext from '../../Context';
import {useNavigation} from '@react-navigation/native';
import { COLORS } from '../../constants';

export default function Cadastro() {

    const {userName} = useContext(UserContext);
    const [name,setName] = useState ();
    const navigation = useNavigation ();

    function criarNome () {
        userName({name:name});
        navigation.navigate('NavRoutes', {screen: 'Home'});
    }

 return (
   <View style={{flex:1}}>
       <Text>
            Cadastro Nome:
       </Text>
       <TextInput
       style={{backgroundColor:COLORS.primary}}
        onChangeText={name => setName(name)}
        value={name}
      />
      <TouchableOpacity onPress={() => criarNome()}>
          <Text>
              Cadastro
          </Text>
      </TouchableOpacity>
   </View>
  );
}