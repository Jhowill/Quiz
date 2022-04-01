import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {COLORS,SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';



export default function Provas () {

const nav = useNavigation ();
    return (

    <SafeAreaView style={{
        flex:1,
        backgroundColor: COLORS.background,
        }}>
            <View style={{
                width:SIZES.width,
                height:SIZES.height,
                alignItems:'center',
                justifyContent:'space-evenly',
                flexWrap:'wrap',
                flexDirection:'row',}}>
                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
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
                        Prova Biologia
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
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
                        Prova Biologia
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
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
                        Prova Biologia
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
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
                        Prova Biologia
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
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
                        Prova Biologia
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
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
                        Prova Biologia
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
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
                        Prova Biologia
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
                        Prova Quimica
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
                        Prova Artes
                    </Text>
                </TouchableOpacity>
   
                <TouchableOpacity
                    onPress={() => {nav.navigate('Quiz')}} 
                    style={{
                        width:170,height:170,backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center',
                        }}>
                    <Image
                        source={require('../../image/iconMat1.jpg')}
                        style={{
                            width:150,
                            height:120,
                            padding: 20,
                            borderRadius: 10,
                            alignSelf:'center',
                            borderColor:COLORS.accent,
                            opacity:0.9,
                        }}/>
                    <Text style={{fontSize:15}}>
                        Prova Matematica
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