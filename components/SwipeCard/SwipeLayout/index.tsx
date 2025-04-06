import React from "react";
import {
  Animated,
  ImageBackground,
  PanResponderInstance,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SwipeLayout = ({
  children,
  panResponder,
  animatedCardStyle,
  backgroundImage,
  backgroundColor,
  iconOpacitySkip,
  iconOpacityLike,
}: {
  children: React.ReactNode;
  panResponder: PanResponderInstance;
  animatedCardStyle: Animated.WithAnimatedObject<ViewStyle>;
  backgroundImage: string;
  backgroundColor: Animated.AnimatedInterpolation<string | number>;
  iconOpacitySkip: Animated.AnimatedInterpolation<string | number>;
  iconOpacityLike: Animated.AnimatedInterpolation<string | number>;
}) => {
  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.card, animatedCardStyle]}
    >
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={[styles.image, StyleSheet.absoluteFillObject]}
        imageStyle={{ borderRadius: 30 }}
      ></ImageBackground>

      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor, borderRadius: 30, flex: 1, padding: 40 },
        ]}
      >
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            styles.iconContainer,
            { opacity: iconOpacitySkip },
          ]}
        >
          <MaterialIcons name={"close"} size={80} color="white" />
        </Animated.View>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            styles.iconContainer,
            { opacity: iconOpacityLike },
          ]}
        >
          <MaterialIcons name={"favorite"} size={80} color="white" />
        </Animated.View>
        {children}
      </Animated.View>
    </Animated.View>
  );
};

export default SwipeLayout;

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
    borderRadius: 30,
    overflow: "hidden",
    justifyContent: "center",
    objectFit: "cover",
    backgroundColor: "white",
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
