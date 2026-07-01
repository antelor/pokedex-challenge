import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    flex: 1,
    marginLeft: 16,
  },

  id: {
    fontSize: 13,
    color: "#888",
    marginBottom: 4,
  },

  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
    textTransform: "capitalize",
  },
});