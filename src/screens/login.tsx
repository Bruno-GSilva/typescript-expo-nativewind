import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import Reanimated, { SlideInDown, SlideInUp } from 'react-native-reanimated'

import { Button, Text, View } from "react-native";

const Login = (): JSX.Element => {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 justify-center items-center bg-rose-500">
      <Reanimated.Text entering={SlideInUp} className="text-4xl text-white font-bold my-2">Bem vindo</Reanimated.Text>
      <Button title="Entrar" onPress={() => navigate("home")} />
    </View>
  );
};

export default Login;
