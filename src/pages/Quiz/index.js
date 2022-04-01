import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, ScrollView } from 'react-native'
import { COLORS, SIZES } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import data from '../../data/biologiaQuestions'
import {useNavigation} from '@react-navigation/native'

const Quiz = () => {


    useEffect(() => {
        sortRandomQuestions();
     } , [])
 
     function sortRandomQuestions(){
         const arr = data;
         //console.log('total de perguntas' + arr.length)
                 //Código para ordenar o Array de forma aletória
                 for (let i = 0; i < arr.length; i++) {
                     const j = Math.floor(Math.random() * (i + 1));
                     [arr[i], arr[j]] = [arr[j], arr[i]];
                     //console.log(j)
                 }
 
                 setNumbAleatorio(arr.slice(0,10));}


    const [numbAleatorio, setNumbAleatorio] = useState ([]);
    const allQuestions = numbAleatorio;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [tamanhoFont, setTamanhoFonte] = useState (16);
    const nav = useNavigation ();


    {/*Tamanho fontSize + */}
    const upSize =() => {
        if (tamanhoFont<=28){
            setTamanhoFonte(tamanhoFont+2)
        } else {
            console.log(tamanhoFont)
        }
    }

    {/*Tamanho fontSize - */}
    const downSize =() => {
        if (tamanhoFont>=14){
            setTamanhoFonte(tamanhoFont-2)
        } else {
            console.log(tamanhoFont)
        }
    }

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }



    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 40
                }}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    
                    <Text style={{color: COLORS.black, fontSize: 16, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: COLORS.black, fontSize: 14, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* fontSize */}
                <View style={{
                    justifyContent:'flex-start',
                    alignItems:'baseline',
                    flexDirection:'row',
                    padding:5
                }}>
                    <TouchableOpacity 
                        style={{
                        alignItems:'center',
                        backgroundColor: COLORS.accent,
                        height:25,
                        width:25,
                        borderRadius:10,
                        borderColor: COLORS.secundary}}
                        onPress={()=>{upSize()}}>
                        <Text>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{
                        alignItems:'center',
                        backgroundColor: COLORS.accent,
                        height:25,
                        width:25,
                        borderRadius:10,
                        borderColor: COLORS.secundary}}
                        onPress={()=>{downSize()}}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:12}}> Ajustar tamanho da fonte</Text>
                </View>
                {/* Question */}
                <Text style={{
                    color: COLORS.black,
                    fontSize: tamanhoFont,
                }}>{allQuestions[currentQuestionIndex]?.question}
                </Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 4, 
                            borderColor: option==correctOption 
                            ? COLORS.success
                            : option==currentOptionSelected 
                            ? COLORS.error 
                            : COLORS.secundary+'40',
                            backgroundColor: option==correctOption 
                            ? COLORS.success +'20'
                            : option==currentOptionSelected 
                            ? COLORS.error +'20'
                            : COLORS.secundary+'20',
                            height: 'auto', padding:5, borderRadius: 15,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 10
                        }}
                        >
                            <Text style={{fontSize: 15, color: COLORS.black}}>{option}</Text>

                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {
                                option==correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: '#fff',
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity
                onPress={handleNext}
                style={{
                    marginTop: 20, width: '80%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 10, alignSelf:'center', 
                }}>
                    <Text style={{fontSize: 24, color: COLORS.black, textAlign: 'center'}}>Próximo</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 10,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 10,
                    borderRadius: 22,
                    backgroundColor: COLORS.accent
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


    return (
    <SafeAreaView style={{
        backgroundColor:COLORS.background,
        flex:1}}>  
       <ScrollView style={{
           flex: 1,
           backgroundColor: COLORS.background
       }}>
           <StatusBar barStyle="light-content" backgroundColor={COLORS.accent} />
           <View style={{
               flex: 1,
               paddingVertical: 25,
               paddingHorizontal: 10,
               backgroundColor: COLORS.background,
               position:'relative'
           }}>

               {/* ProgressBar */}
               { renderProgressBar() }

               {/* Question */}
               {renderQuestion()}

               {/* Options */}
               {renderOptions()}

               {/* Next Button */}
               {renderNextButton()}

               {/* Score Modal */}
               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.primary,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: COLORS.background,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) 
                                ? 'Parabéns! Você acertou a maioria!' 
                                : 'OPS! Você errou a maioria!' }
                            </Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score> allQuestions.length/2 ? COLORS.success : COLORS.error
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black
                                }}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Repetir a prova</Text>
                           </TouchableOpacity>

                           <TouchableOpacity
                           onPress={() => {nav.navigate('Home')}}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20, marginTop: 5
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                                    }}>Home
                                </Text>
                           </TouchableOpacity>

                       </View>

                   </View>
               </Modal>
           </View>
       </ScrollView>
</SafeAreaView>
    )
}

export default Quiz;