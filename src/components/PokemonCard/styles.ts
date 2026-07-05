import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,

    shadowColor: "#000",
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
    textTransform: "capitalize",
  },
  imageSkeleton: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
  },
  textSkeleton: {
    width: "70%",
    height: 12,
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
    marginBottom: 6,
  },
  textSkeletonSmall: {
    width: "40%",
    height: 12,
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  }
});