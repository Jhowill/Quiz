import NavRoutes from "./routes";
import InitRoutes from "./InitRoute";
import {useContext} from 'react';
import { View,ActivityIndicator } from "react-native";
import UserContext from "../Context";

const routes = () => {

    const {signed, loading} = useContext(UserContext);

    if (loading === true) {
        return(
            <View style={{backgroundColor:'#000', alignItems:'center',justifyContent:'center', flex:1}}>
                <ActivityIndicator size={'large'} color='#fff'/>
            </View>
        )
    }
    return signed ? <NavRoutes/> : <InitRoutes/>;

}

export default routes;