import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  id: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
    textTransform: "capitalize",
  },
  footerLoader: {
    marginVertical: 20,
  },
  errorText: {
    color: "#D32F2F",
    fontSize: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
});