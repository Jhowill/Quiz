import {TouchableOpacity, Text, Image} from 'react-native';
import {COLORS} from '../../constants'


export default function TouchList (props) {

    return (
        <TouchableOpacity
        onPress={props.onpress}
        style={{
        width:'90%',
        borderWidth: 4,
        height: 50,
        padding:5, 
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center', 
        paddingHorizontal: 20,
        marginVertical: 10,
        backgroundColor:COLORS.backTouch,
    }}>
    
        
    </TouchableOpacity>      

     ) }