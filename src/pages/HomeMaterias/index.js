import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity,ScrollView } from 'react-native';
import {COLORS,SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import TouchHome2 from '../../components/TouchHome2';



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
                backgroundColor:'#00A878',
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
                    <TouchHome2 
                        text='Materias Biologia'
                        onpress={()=>{nav.navigate('Materias')}}
                        img={require('../../image/iconProva.jpg')}/>
            </View>           
        </ScrollView>
        <View style={{
                backgroundColor:COLORS.background,
                width:'100%',
                height: 120,
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