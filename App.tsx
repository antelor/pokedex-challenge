import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./src/navigation";
import { FavoritesProvider } from "./src/context/FavoritesContext";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<FavoritesProvider>
				<SafeAreaProvider>
					<NavigationContainer>
						<Navigation />
					</NavigationContainer>
				</SafeAreaProvider>
			</FavoritesProvider>
		</QueryClientProvider>
	);
}
