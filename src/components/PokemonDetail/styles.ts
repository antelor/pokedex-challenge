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
    marginBottom: 12
  },
  image: {
    width: 220,
    height: 220,
    alignSelf: "center",
    marginBottom: 100,
    transform: [{ translateY: 110 }],
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
    height: 300,
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
    width: 2,
    backgroundColor: "#DDD",
    alignSelf: "stretch",
    marginHorizontal: 12,
  },
  valueContainer: {
    height: 36,
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
  statInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 50,
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  statName: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  statValue: {
    fontSize: 12,
    fontWeight: "700",
  },
  statBarContainer: {
    flex: 1,
    height: 8,
    marginLeft: 12,
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
  },
  pokeball: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 270,
    height: 270,
    opacity: 0.07,
  },
});