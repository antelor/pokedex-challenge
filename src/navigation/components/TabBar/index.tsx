import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { ComponentProps } from "react";

type TabName = "Home" | "Favorites";

type TabConfig = {
	icon: ComponentProps<typeof Ionicons>["name"];
	label: string;
};

const TAB_CONFIG: Record<TabName, TabConfig> = {
	Home: {
		icon: "home",
		label: "Home",
	},
	Favorites: {
		icon: "heart",
		label: "Favorites",
	},
};
export default function TabBar({ state, navigation }: BottomTabBarProps) {
	const { bottom } = useSafeAreaInsets();

	return (
		<View
			style={[
				styles.container,
				{
					bottom: bottom + 16,
				},
			]}
		>
			{state.routes.map((route, index) => {
				const focused = state.index === index;

				const config = TAB_CONFIG[route.name as TabName];

				const color = focused ? "#EF5350" : "#9CA3AF";

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!focused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				return (
					<View key={route.key} style={styles.itemContainer}>
						{index === 1 && <View style={styles.divider} />}

						<Pressable
							onPress={onPress}
							style={styles.item}
							testID={`${route.name.toLowerCase()}-tab`}
						>
							<Ionicons name={config.icon} size={24} color={color} />

							<Text style={[styles.label, focused && styles.activeLabel]}>
								{config.label}
							</Text>
						</Pressable>
					</View>
				);
			})}
		</View>
	);
}
