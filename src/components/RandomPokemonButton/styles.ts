import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 4
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "#ef5350",
    fontSize: 16,
    fontWeight: "600",
  },
});