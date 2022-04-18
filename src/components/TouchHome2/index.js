import {TouchableOpacity, Text, Image} from 'react-native';
import {COLORS} from '../../constants'


export default function TouchHome2 (props) {

    return (
                <TouchableOpacity
                    onPress={props.onpress} 
                    style={{
                    width:170,
                    height:170,
                    backgroundColor: COLORS.white, 
                    borderRadius: 35, 
                    alignSelf:'center', 
                    alignItems:'center',
                    justifyContent:'space-around',
                    elevation:10,
                    }}>
                    <Image
                        source={props.img}
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
                        {props.text}
                    </Text>
                </TouchableOpacity>

     ) }