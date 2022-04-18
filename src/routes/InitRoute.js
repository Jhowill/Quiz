import {createStackNavigator} from '@react-navigation/stack'
import NavRoutes from './routes';
import Cadastro from '../pages/Cadastro';

function initRoutes () {


    const stack = createStackNavigator();

    return(
        <stack.Navigator initialRouteName='Cadastro'>
            <stack.Screen 
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: false}}
            />

            <stack.Screen 
                name="NavRoutes"
                component={NavRoutes}
                options={{headerShown: false}}
            />
       </stack.Navigator>
   )
}
export default initRoutes;