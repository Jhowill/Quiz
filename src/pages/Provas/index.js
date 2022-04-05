import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity,ScrollView } from 'react-native';
import {COLORS,SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';



export default function HomeMaterias () {


    const nav = useNavigation ();


    return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor: COLORS.background,
        }}>
        <ScrollView>
            <View style={{
                flex:1,
                backgroundColor:'#CF8BA9',
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
                justifyContent:'space-around',
                flexWrap:'wrap',
                flexDirection:'row',
                padding:10,
                }}>

                    
                <TouchableOpacity
                    onPress={() => {nav.navigate('Materias')}} 
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
                        source={require('../../image/iconArtes.jpg')}
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
                        Artes
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
                        source={require('../../image/iconMatematica.jpg')}
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
                        Matematica
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
                        source={require('../../image/iconGeografia.jpg')}
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
                        Geografia
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
                        source={require('../../image/iconBiologia.jpg')}
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
                        Biologia
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={() => {nav.navigate('Materias')}} 
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
                        source={require('../../image/iconArtes.jpg')}
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
                        Português
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
                        source={require('../../image/iconQuimica.jpg')}
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
                        Química
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
                        source={require('../../image/iconGeografia.jpg')}
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
                        História
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
                        source={require('../../image/iconFisica.jpg')}
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
                        Física
                    </Text>
                </TouchableOpacity>
            </View>           
        </ScrollView>
        <View 
        style={{
                backgroundColor:COLORS.background,
                width:'100%',
                height: 120,
            }}>
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