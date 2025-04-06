import React from "react";
import { Animated, ImageBackground, StyleSheet } from "react-native";
import MatchActions from "./MatchActions";
import useSwipeCard from "./useSwipeCard";

type Props = {
  image: string;
  fullname: string;
  onRightSwipe?: () => void;
  onLeftSwipe?: () => void;
  index?: number;
  isFront?: boolean;
};

export default function SwipeCard({
  image,
  fullname,
  index,
  isFront,
  onRightSwipe,
  onLeftSwipe,
}: Props) {
  const { panResponder, animatedCardStyle, backgroundColor } = useSwipeCard({
    isFront,
    onRightSwipe,
    onLeftSwipe,
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.card, animatedCardStyle]}
    >
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={{ borderRadius: 30 }}
      />
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor, borderRadius: 30 },
        ]}
      >
        <MatchActions />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    borderRadius: 30,
    elevation: 1,
    flex: 1,
    width: "90%",
    height: "90%",
  },
  image: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    objectFit: "cover",
  },
  icon: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 12,
  },
});
