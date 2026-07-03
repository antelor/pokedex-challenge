import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  image: {
    width: 220,
    height: 220,
    alignSelf: "center",
    marginBottom: 24,
  },

  section: {
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  badge: {
    backgroundColor: "#e5e7eb",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    textTransform: "capitalize",
  },

  textItem: {
    fontSize: 16,
    textTransform: "capitalize",
    marginBottom: 8,
  },

  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  statName: {
    fontSize: 16,
    textTransform: "capitalize",
  },

  statValue: {
    fontSize: 16,
    fontWeight: "600",
  },
});