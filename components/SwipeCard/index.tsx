import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MatchActions from "./MatchActions";
import useSwipeCard from "./useSwipeCard";
import { MatchType, User } from "@/types/user";
import UserInfoSumary from "./UserInfoSumary";
import SwipeLayout from "./SwipeLayout";
import ModeSelector from "./ModeSelector";

type Props = {
  onRightSwipe?: () => void;
  onLeftSwipe?: () => void;
  isFront?: boolean;
  user: User;
  onChangeMatchType?: (type: MatchType) => void;
  currentMatchType: MatchType;
};

export default function SwipeCard({
  isFront,
  onRightSwipe,
  onLeftSwipe,
  user,
  onChangeMatchType,
  currentMatchType,
}: Props) {
  const {
    panResponder,
    animatedCardStyle,
    backgroundColor,
    swipeLeft,
    swipeRight,
    iconOpacityLike,
    iconOpacitySkip,
  } = useSwipeCard({
    isFront,
    onRightSwipe,
    onLeftSwipe,
  });

  const onHandleChangeMatchType = (type: MatchType) => {
    onChangeMatchType && onChangeMatchType(type);
  };

  return (
    <SwipeLayout
      panResponder={panResponder}
      animatedCardStyle={animatedCardStyle}
      backgroundColor={backgroundColor}
      iconOpacitySkip={iconOpacitySkip}
      iconOpacityLike={iconOpacityLike}
      backgroundImage={user.photo}
    >
      <View style={styles.headerContainer}>
        <ModeSelector
          selected={currentMatchType}
          onChange={onHandleChangeMatchType}
        />
      </View>
      <View style={styles.bottomContainer}>
        <UserInfoSumary user={user} />
        <MatchActions onLeftSwipe={swipeLeft} onRightSwipe={swipeRight} />
      </View>
    </SwipeLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    borderRadius: 30,
    elevation: 1,
    flex: 1,
    width: "80%",
    height: "10%",
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
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
