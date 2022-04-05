import {createStackNavigator} from '@react-navigation/stack'
import NavRoutes from './routes';

function initRoutes () {


    const stack = createStackNavigator();

    return(
        <stack.Navigator initialRouteName='Cadastro'>
            <stack.Screen 
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: true}}
            />

            <stack.Screen 
                name="NavRoutes"
                component={NavRoutes}
                options={{headerShown: true}}
            />
       </stack.Navigator>
   )
}
export default initRoutes;