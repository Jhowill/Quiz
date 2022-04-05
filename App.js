import 'react-native-gesture-handler'
import Routes from "./src/routes";
import { UserProvider } from "./src/Context";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
 return (

    <NavigationContainer>
      <UserProvider>
        <Routes/>
      </UserProvider>
    </NavigationContainer>

 )
};
