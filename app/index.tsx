import SwipeCard from "@/components/SwipeCard";
import {
  datingCandidates,
  friendshipCandidates,
  relationshipCandidates,
} from "@/data/fakeData";
import { MatchType, User } from "@/types/user";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header";
import { useDrawerStatus } from "@react-navigation/drawer";

export default function Index() {
  const statusDrawer = useDrawerStatus();
  const [friendshipUsers, setFriendshipUsers] = useState(friendshipCandidates);
  const [datingUsers, setDatingUsers] = useState(datingCandidates);
  const [relationshipUsers, setRelationshipUsers] = useState(
    relationshipCandidates,
  );
  const [currentMatchType, setCurrentMatchType] = useState<MatchType>(
    MatchType.FRIENDSHIP,
  );

  const afterSwipe = () => {
    switch (currentMatchType) {
      case MatchType.RELATIONSHIP:
        setRelationshipUsers((prevItems) => prevItems.slice(0, -1));
        break;
      case MatchType.DATING:
        setDatingUsers((prevItems) => prevItems.slice(0, -1));
        break;
      default:
        setFriendshipUsers((prevItems) => prevItems.slice(0, -1));
        break;
    }
  };

  const getCurrentResults = (): User[] => {
    switch (currentMatchType) {
      case MatchType.RELATIONSHIP:
        return relationshipUsers;
      case MatchType.DATING:
        return datingUsers;
      default:
        return friendshipUsers;
    }
  };

  const getGradientColors = () => {
    if (statusDrawer === "open") return ["#FFB1C7", "#FFB1C7"];
    switch (currentMatchType) {
      case MatchType.RELATIONSHIP:
        return ["#FF58A4", "#FF6B86"]; // Pink gradient
      case MatchType.DATING:
        return ["#FFB03A", "#FF6B86"]; // Yellow gradient
      default:
        return ["#7086E3", "#9072E5"]; // Purple gradient
    }
  };

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={getGradientColors()}
        style={styles.gradientBackground}
      >
        <SafeAreaView style={[styles.container]}>
          <Header />
          <View style={styles.content}>
            {getCurrentResults().map((user, index) => (
              <SwipeCard
                key={user.id}
                isFront={index === getCurrentResults().length - 1}
                onLeftSwipe={afterSwipe}
                onRightSwipe={afterSwipe}
                user={user}
                onChangeMatchType={setCurrentMatchType}
                currentMatchType={currentMatchType}
              />
            ))}
          </View>
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  content: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
