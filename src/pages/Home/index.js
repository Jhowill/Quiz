import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import {CORES,SIZES} from '../../constants';
import { useState } from 'react';
import data from '../../data/perguntasQuiz'


const Home = () => {
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState (0);
 
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
                    <Text style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: COLORS.white, fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text>Ola</Text>
            </View>
        )
    }

    return (
    <SafeAreaView style={{
        flex:1
        }}>
            <StatusBar barStyle ='light-content' backgroundColor={CORES.cor1}/>
            <View style= {{
                flex:1,
                paddingVertical: 40,
                paddingHorizontal: 16,
                backgroundColor: CORES.background,
                position:'relative',
            }}>
                
                {renderQuestion}

            </View>
    </SafeAreaView>
    )
};
export default Home