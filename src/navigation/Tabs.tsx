import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";

export type RootTabParamList = {
  Home: undefined;
  Favorites: undefined;
};

export type RootStackParamList = {
  Tabs: undefined;
  Detail: {
    id: number;
  };
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={route.name === "Home" ? "home" : "heart"}
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: "Pokédex" }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
      />
    </Tab.Navigator>
  );
}