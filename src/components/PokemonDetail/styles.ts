import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginBottom: 16,
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  image: {
    width: 220,
    height: 220,
    alignSelf: "center",
    marginBottom: 16,
    transform: [{ translateY: 24 }],
  },
  section: {
    marginBottom: 12,
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
    color: 'white'
  },
  textItem: {
    fontSize: 16,
    textTransform: "capitalize",
    marginBottom: 8,
  },
  heroBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 210,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  container: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  column: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
    alignSelf: "stretch",
    marginHorizontal: 12,
  },
  valueContainer: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  label: {
    marginTop: 8,
    fontSize: 13,
    color: "#888",
  },
  statRow: {
    marginBottom: 12,
  },
  statName: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  statValue: {
    fontSize: 12,
    fontWeight: "700",
    position: "absolute",
    right: 0,
    top: 18,
  },
  statBarContainer: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 999,
    overflow: "hidden",
  },
  statBarFill: {
    height: "100%",
    borderRadius: 999,
  },
  typeContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12
  },
  favContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e5e7eb",
    paddingHorizontal: 12,
    borderRadius: 16,
  }
});