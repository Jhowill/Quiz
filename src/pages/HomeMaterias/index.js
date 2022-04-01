import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import {COLORS,SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import { useState } from 'react';



export default function ResumoMaterias() {

    const nav = useNavigation ();


 return (

 
    <SafeAreaView style={{
        flex:1,
        backgroundColor: COLORS.background,
        }}>
            <View style={{
                width:'100%',
                height:'100%',
                alignItems:'center',
                justifyContent:'space-evenly',
                flexWrap:'wrap',
                flexDirection:'row',}}>
                <TouchableOpacity
                    onPress={() => {nav.navigate('Materias')}} 
                    style={{
                    width:170,height:170,backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center',
                        }}>
                    <Image
                        source={require('../../image/filoIcon.jpg')}
                        style={{
                            width:150,
                            height:120,
                            padding: 20,
                            borderRadius: 10,
                            alignSelf:'center',
                            borderColor:COLORS.accent,
                            opacity:0.9,
                        }}
                    />
                    <Text style={{fontSize:15}}>
                        Materias Filosofia
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('Materias')}} 
                    style={{
                    width:170,height:170,backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center',
                        }}>
                    <Image
                        source={require('../../image/iconBio.jpg')}
                        style={{
                            width:150,
                            height:120,
                            padding: 20,
                            borderRadius: 10,
                            alignSelf:'center',
                            borderColor:COLORS.accent,
                            opacity:0.9,
                        }}
                    />
                    <Text style={{fontSize:15}}>
                        Materias Biologia
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('Materias')}} 
                    style={{
                    width:170,height:170,backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center',
                        }}>
                    <Image
                        source={require('../../image/geoIcon.jpg')}
                        style={{
                            width:150,
                            height:120,
                            padding: 20,
                            borderRadius: 10,
                            alignSelf:'center',
                            borderColor:COLORS.accent,
                            opacity:0.9,
                        }}
                    />
                    <Text style={{fontSize:15}}>
                        Materias Geografia
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('Materias')}} 
                    style={{
                    width:170,height:170,backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center',
                        }}>
                    <Image
                        source={require('../../image/backMat.jpg')}
                        style={{
                            width:150,
                            height:120,
                            padding: 20,
                            borderRadius: 10,
                            alignSelf:'center',
                            borderColor:COLORS.accent,
                            opacity:0.9,
                        }}
                    />
                    <Text style={{fontSize:15}}>
                        Materias Matematica
                    </Text>
                </TouchableOpacity>
            </View>

    </SafeAreaView>
  );
  
}
