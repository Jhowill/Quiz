import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Modal,ScrollView } from 'react-native';
import {COLORS,SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import data from '../../data/materiasBiology';
import {useState} from 'react';

const ComoPassar = () => {

    const [showScoreModal, setShowScoreModal] = useState(false);
    const [itenText, setItenText] = useState ();
    const [itenText2, setItenText2] = useState ();
    const nav = useNavigation ();

    const allMaterias = data;

    const Titles = allMaterias.map((titulo) => (

    
        <TouchableOpacity
            onPress={() => {setShowScoreModal(true),setItenText(titulo.text), setItenText2(titulo.text2)}}
            style={{
            width:'90%',
            borderWidth: 4,
            height: '10%',
            padding:5, 
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center', 
            paddingHorizontal: 20,
            marginVertical: 10,
            backgroundColor:'#7EB2DD',
        }}>
            <Text>{titulo.title}</Text>
        </TouchableOpacity>

        // <TouchList onpress = {()=> {setShowScoreModal(true), setItenText(titulo.text), setItenText2(titulo.text2)}}
        //    text={titulo.title}
        // />
    
        ));

    
    

    return (
        <SafeAreaView style={{
            flex:1,
            backgroundColor: COLORS.background,
            }}>
                <ScrollView>

            <View style={{
                width:SIZES.width,
                height:SIZES.height,
                alignItems:'center',
                justifyContent:'space-around',
                flexWrap:'wrap',
                flexDirection:'row'}}>

                {Titles}

            </View> 

            <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                        <Text style={{color:COLORS.black}}>{itenText}</Text> 
                        <Text style={{color:COLORS.black}}>{itenText2}</Text> 

                        <TouchableOpacity
                           onPress={() => {setShowScoreModal(false)}}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, 
                               width: '60%', 
                               borderRadius: 20, 
                               marginTop: 5
                        }}>
                               <Text style={{
                                   textAlign: 'center', fontSize: 20
                                    }}>Voltar
                                </Text>
                        </TouchableOpacity>                               
                </View>
                    
            </Modal>
            </ScrollView>
            <View style={{
                backgroundColor:COLORS.background,
                width:'100%',
                height: 125,
            }}></View>  
        </SafeAreaView>
  );
};

export default ComoPassar;