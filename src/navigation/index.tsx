import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./Tabs";
import Detail from "../screens/Detail";

export type RootStackParamList = {
	Tabs: undefined;
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
				name="Tabs"
				component={Tabs}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="Detail"
				component={Detail}
				options={{
					headerBackTitle: "",
					headerBackButtonDisplayMode: "minimal",
				}}
			/>
		</Stack.Navigator>
	);
}
