import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 48,
    right: 48,
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    backgroundColor: "#fff",
    borderRadius: 999,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  divider: {
    width: 2,
    height: 32,
    backgroundColor: "#E5E7EB",
  },
  label: {
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "600",
  },
  activeLabel: {
    color: "#EF5350",
  },
});