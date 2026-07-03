import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Header from "./components/Header";
import TabBar from "./components/TabBar";

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
			tabBar={(props) => <TabBar {...props} />}
			screenOptions={({ route }) => ({
				headerTitleAlign: "center",
				tabBarActiveTintColor: "#EF5350",
				tabBarInactiveTintColor: "#9CA3AF",
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
				options={{
					header: () => <Header title="Pokédex" />,
					headerStyle: {
						backgroundColor: "#ef5350",
					},
				}}
			/>

			<Tab.Screen
				name="Favorites"
				component={Favorites}
				options={{
					header: () => <Header title="Favorites" />,
					headerStyle: {
						backgroundColor: "#ef5350",
					},
				}}
			/>
		</Tab.Navigator>
	);
}
