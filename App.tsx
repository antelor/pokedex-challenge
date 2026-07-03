import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import Navigation from "./src/navigation";
import { FavoritesProvider } from "./src/context/FavoritesContext";
import { queryClient } from "./src/query/queryClient";
import { persister } from "./src/query/persister";

export default function App() {
	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={{
				persister,
				maxAge: 1000 * 60 * 60 * 24 * 7,
			}}
		>
			<FavoritesProvider>
				<SafeAreaProvider>
					<NavigationContainer>
						<Navigation />
					</NavigationContainer>
				</SafeAreaProvider>
			</FavoritesProvider>
		</PersistQueryClientProvider>
	);
}
