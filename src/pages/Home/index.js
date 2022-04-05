import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity,ScrollView } from 'react-native';
import {COLORS,SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';



export default function Home () {


    const nav = useNavigation ();


    return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor: COLORS.background,
        }}>
        <ScrollView>
            <View style={{
                flex:1,
                backgroundColor:'#FFCB77',
                alignItems:'center',
                justifyContent:'space-evenly',
                flexWrap:'wrap',
                flexDirection:'row',
                padding:10}}>

                    <Text>Ola Jhow</Text>
                    
                </View>

            <View style={{
                backgroundColor:COLORS.background,
                flex:2,
                alignItems:'center',
                justifyContent:'space-evenly',
                flexWrap:'wrap',
                flexDirection:'row',
                padding:10,
                }}>

                    
                <TouchableOpacity
                    onPress={() => {nav.navigate('Provas')}} 
                    style={{
                    width:170,
                    height:220,
                    backgroundColor: COLORS.white, 
                    padding: 10, 
                    borderRadius: 35, 
                    alignSelf:'center', 
                    alignItems:'center',
                    justifyContent:'space-around',
                    borderColor:COLORS.accent,
                    borderWidth:1,
                    }}>
                    <Image
                        source={require('../../image/iconProva.jpg')}
                        style={{
                            width:120,
                            height:120,
                            padding: 20,
                            borderRadius: 10,
                            alignSelf:'center',
                            borderColor:COLORS.accent,
                            opacity:0.9,
                        }}
                    />
                    <Text style={{fontSize:15}}>
                        Provas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
                    style={{
                    width:170,
                    height:170,
                    backgroundColor: COLORS.white, 
                    padding: 10, 
                    borderRadius: 35, 
                    alignSelf:'center', 
                    alignItems:'center',
                    justifyContent:'space-around',
                    borderColor:COLORS.accent,
                    borderWidth:1,
                        }}>
                    <Image
                        source={require('../../image/iconConcurso.jpg')}
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
                        Concursos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
                    style={{
                    width:170,
                    height:170,
                    backgroundColor: COLORS.white, 
                    padding: 10, 
                    borderRadius: 35, 
                    alignSelf:'center', 
                    alignItems:'center',
                    justifyContent:'space-around',
                    borderColor:COLORS.accent,
                    borderWidth:1,
                        }}>
                    <Image
                        source={require('../../image/iconRedacao.jpg')}
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
                    onPress={() => {nav.navigate('HomeMaterias')}} 
                    style={{
                    width:170,
                    height:220,
                    backgroundColor: COLORS.white, 
                    padding: 10, 
                    borderRadius: 35, 
                    alignSelf:'center', 
                    alignItems:'center',
                    justifyContent:'space-around',
                    borderColor:COLORS.accent,
                    borderWidth:1,
                    }}>
                    <Image
                        source={require('../../image/iconMaterias.jpg')}
                        style={{
                            width:120,
                            height:120,
                            padding: 20,
                            borderRadius: 10,
                            alignSelf:'center',
                            borderColor:COLORS.accent,
                            opacity:0.9,
                        }}
                    />
                    <Text style={{fontSize:15}}>
                        Materias
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('Provas')}} 
                    style={{
                    width:180,
                    height:200,
                    backgroundColor: COLORS.white, 
                    padding: 10, 
                    borderRadius: 35, 
                    alignSelf:'center', 
                    alignItems:'center',
                    justifyContent:'space-around',
                    borderColor:COLORS.accent,
                    borderWidth:1,
                    }}>
                    <Image
                        source={require('../../image/iconProva.jpg')}
                        style={{
                            width:120,
                            height:120,
                            padding: 20,
                            borderRadius: 10,
                            alignSelf:'center',
                            borderColor:COLORS.accent,
                            opacity:0.9,
                        }}
                    />
                    <Text style={{fontSize:15}}>
                        Provas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
                    style={{
                    width:170,
                    height:170,
                    backgroundColor: COLORS.white, 
                    padding: 10, 
                    borderRadius: 35, 
                    alignSelf:'center', 
                    alignItems:'center',
                    justifyContent:'space-around',
                    borderColor:COLORS.accent,
                    borderWidth:1,
                        }}>
                    <Image
                        source={require('../../image/iconConcurso.jpg')}
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
                        Concursos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {nav.navigate('ProvaBiologia')}} 
                    style={{
                    width:170,
                    height:170,
                    backgroundColor: COLORS.white, 
                    padding: 10, 
                    borderRadius: 35, 
                    alignSelf:'center', 
                    alignItems:'center',
                    justifyContent:'space-around',
                    borderColor:COLORS.accent,
                    borderWidth:1,
                        }}>
                    <Image
                        source={require('../../image/iconRedacao.jpg')}
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
                    onPress={() => {nav.navigate('HomeMaterias')}} 
                    style={{
                    width:180,
                    height:200,
                    backgroundColor: COLORS.white, 
                    padding: 10, 
                    borderRadius: 35, 
                    alignSelf:'center', 
                    alignItems:'center',
                    justifyContent:'space-around',
                    borderColor:COLORS.accent,
                    borderWidth:1,
                    }}>
                    <Image
                        source={require('../../image/iconMaterias.jpg')}
                        style={{
                            width:120,
                            height:120,
                            padding: 20,
                            borderRadius: 10,
                            alignSelf:'center',
                            borderColor:COLORS.accent,
                            opacity:0.9,
                        }}
                    />
                    <Text style={{fontSize:15}}>
                        Materias
                    </Text>
                </TouchableOpacity>
                
            </View>
                      
            </ScrollView>
            <View style={{
                backgroundColor:COLORS.background,
                width:'100%',
                height: 125,
            }}></View> 
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

/*
    async function InterstistialAd() {
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds : true})
        await AdMobInterstitial.showAdAsync();
    }
    function checkAdd () {
        if (currentQuestionIndex == 10) {
        loadAd
        }
    }

    async function loadAd(){
        AdMobInterstitial.setAdUnitID(InteradUnitID);
        InterstistialAd();
    }
*/