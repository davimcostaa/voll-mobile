import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cadastro from "../Cadastro";
import Login from "../Login";
import Tabs from "../Tabs";

const Tab = createNativeStackNavigator();

const Rotas = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Tabs" component={Tabs} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Rotas