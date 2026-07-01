import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Detail from "../screens/Detail/index";

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Pokédex" }}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
}