import { Text, View } from "react-native";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
interface Props {
	title: string;
}

export default function Header({ title }: Props) {
	const insets = useSafeAreaInsets();
	return (
		<View style={[styles.container, { paddingTop: insets.top }]}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}
