import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity,ScrollView } from 'react-native';
import {COLORS,SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import UserContext from '../../Context';
import TouchHome from '../../components/touchHome';
import TouchHome2 from '../../components/TouchHome2';


export default function Home () {


    const nav = useNavigation ();
    const {user} = useContext (UserContext);


    return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor: COLORS.background,
        }}>
        <ScrollView>
            <View style={{
                backgroundColor:'#FFCB77',
                alignItems:'center',
                justifyContent:'space-evenly',
                flexWrap:'wrap',
                flexDirection:'row',
                padding:10}}>

                    <Text style={{fontSize:48}}>Ola {user}</Text>
                    
                </View>

            <View style={{
                width: '100%',
                height:'100%',
                backgroundColor:COLORS.background,
                alignItems:'center',
                justifyContent:'space-around',
                flexWrap:'wrap',
                flexDirection:'row',
                padding:30 ,
                }}>

                <TouchHome 
                    text='Provas' 
                    onpress={() => {nav.navigate('Provas')}} 
                    img={require('../../image/iconProva.jpg')}/>

                <TouchHome2 
                    text='Concurso'
                    onpress={() => {nav.navigate('')}}
                    img={require('../../image/iconConcurso.jpg')}/>

                <TouchHome 
                    text='Como Passar' 
                    onpress={() => {nav.navigate('ComoPassar')}} 
                    img={require('../../image/iconEstudar.png')}/>

                <TouchHome2 
                    text='Materias'
                    onpress={() => {nav.navigate('HomeMaterias')}}
                    img={require('../../image/iconMaterias.jpg')} />

                <TouchHome 
                    text='Como Passar' 
                    onpress={() => {nav.navigate('ComoPassar')}} 
                    img={require('../../image/iconEstudar.png')}/>

                <TouchHome2 
                    text='Materias'
                    onpress={() => {nav.navigate('HomeMaterias')}}
                    img={require('../../image/iconMaterias.jpg')} />
             

            </View>
                      
            </ScrollView>
            <View style={{
                backgroundColor:COLORS.background,
                width:'100%',
                height: 125,
            }}/>
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