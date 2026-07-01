import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function SkeletonWrapper({
  children,
  isLoading = false,
}: Props) {
  const [layout, setLayout] = useState({ width: 0, height: 0 });

  const translateX = useSharedValue(-1);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(1, { duration: 1100 }),
      -1,
      false
    );
  }, []);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value * layout.width,
      },
    ],
  }));

  if (!isLoading) return <>{children}</>;

  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setLayout({ width, height });
      }}
    >
      <View style={{ opacity: 0 }}>{children}</View>

      <View
        style={[
          styles.skeleton,
          { width: layout.width, height: layout.height },
        ]}
      >
        <Animated.View style={[styles.shimmer, shimmerStyle]}>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(255,255,255,0.6)",
              "transparent",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  skeleton: {
    position: "absolute",
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
  },
  shimmer: {
    position: "absolute",
    width: "30%",
    height: "100%",
  },
});