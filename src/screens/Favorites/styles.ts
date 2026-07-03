import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    padding: 16,
    gap: 16,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
  },

  emptySubtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#6b7280",
  },
});