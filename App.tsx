import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Ways from "./src/routes/stack.routes";

const App = () => {
  return (
    <NavigationContainer>
      <Ways />
    </NavigationContainer>
  );
};

export default App;
