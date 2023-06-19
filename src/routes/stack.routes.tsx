import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "../screens/home";
import Login from "../screens/login";

const Ways = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="login">
      {/* rote01 */}
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      {/* rote02 */}
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: "Tela Inicial",
        }}
      />
    </Stack.Navigator>
  );
};

export default Ways;
