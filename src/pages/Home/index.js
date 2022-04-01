import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {COLORS,SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';


export default function Home () {

const nav = useNavigation ();
    return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor: COLORS.background,
        }}>
            <View style={{
                backgroundColor:COLORS.background,
                width:'100%',
                height:'100%',
                alignItems:'center',
                justifyContent:'space-evenly',
                flexWrap:'wrap',
                flexDirection:'row',}}>
                <TouchableOpacity
                    onPress={() => {nav.navigate('Provas')}} 
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
                        Simulados
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
                    style={{
                    width:170,height:170,backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center',
                        }}>
                    <Image
                        source={require('../../image/iconBiology.jpg')}
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
                        Redação
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaArtes')}} 
                    style={{
                    width:170,height:170,backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center',
                        }}>
                    <Image
                        source={require('../../image/iconArt.jpg')}
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
                        Compartilhar este APP
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={() => {nav.navigate('Quiz')}} 
                    style={{
                        width:170,height:170,backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center',
                        }}>
                    <Image
                        source={require('../../image/iconArt.jpg')}
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
                        O que estudar?
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={() => {nav.navigate('HomeMaterias')}} 
                    style={{
                        width:170,height:170,backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center',
                        }}>
                    <Image
                        source={require('../../image/iconArt.jpg')}
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
                        Resumo materias
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ComoPassar')}} 
                    style={{
                        width:170,height:170,backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center',
                        }}>
                    <Image
                        source={require('../../image/iconArt.jpg')}
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
                        Sobre os concursos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('HomeMaterias')}} 
                    style={{
                        width:170,height:170,backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center',
                        }}>
                    <Image
                        source={require('../../image/iconArt.jpg')}
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
                        Avaliar App
                    </Text>
                </TouchableOpacity>

                <Image source={require('../../image/backgroundBiology2.jpg')}
                style={{
                    width: SIZES.width,
                    height: '58%',
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 30,
                    opacity: 0.5,
                    borderRadius:50,
                }}/>
            </View>           

    </SafeAreaView>
    )
};

/*<Image
                source={require('../assets/images/DottedBG.png')}
                style={{
                    width: SIZES.width,
                    height: 130,
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    opacity: 0.5
                }}*/