import React from "react";
import { Animated, ImageBackground, StyleSheet, View } from "react-native";
import MatchActions from "./MatchActions";
import useSwipeCard from "./useSwipeCard";
import { User } from "@/types/user";
import UserInfoSumary from "./UserInfoSumary";

type Props = {
  onRightSwipe?: () => void;
  onLeftSwipe?: () => void;
  isFront?: boolean;
  user: User;
};

export default function SwipeCard({
  isFront,
  onRightSwipe,
  onLeftSwipe,
  user,
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
        source={{ uri: user.photo }}
        style={styles.image}
        imageStyle={{ borderRadius: 30 }}
      />
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor, borderRadius: 30, flex: 1, padding: 40, },
        ]}
      >
        <View style={styles.headerContainer}></View>
        <View style={styles.bottomContainer}>
          <UserInfoSumary user={user} />
          <MatchActions />
        </View>
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
  headerContainer: {
    flex: 1,
    gap: 20,
  },
  bottomContainer: {
    gap: 30,
  },
});
