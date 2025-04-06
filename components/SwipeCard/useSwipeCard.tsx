import React, { useRef } from "react";
import { Animated, Dimensions, PanResponder, ViewStyle } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 120;

const useSwipeCard = ({
  isFront,
  onRightSwipe,
  onLeftSwipe,
}: {
  isFront?: boolean;
  onRightSwipe?: () => void;
  onLeftSwipe?: () => void;
}) => {
  const position = useRef(new Animated.ValueXY()).current;
  const transition = useRef(new Animated.Value(isFront ? 1 : 0)).current;
  const verticalPosition = useRef(new Animated.Value(isFront ? 10 : 0)).current;
  const [wasFront, setWasFront] = React.useState(isFront);

  React.useEffect(() => {
    if (!wasFront && isFront) {
      Animated.timing(transition, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();

      Animated.timing(verticalPosition, {
        toValue: 10,
        duration: 300,
        useNativeDriver: false,
      }).start();

      setWasFront(true);
    } else if (!isFront) {
      Animated.timing(verticalPosition, {
        toValue: -50,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setWasFront(false);
    }
  }, [isFront, wasFront]);

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ["-15deg", "0deg", "15deg"],
    extrapolate: "clamp",
  });

  const backgroundColor = position.x.interpolate({
    inputRange: [-30, 0, 30],
    outputRange: [
      "rgba(147, 142, 144, 0.7)",
      "transparent",
      "rgba(255, 177, 199, 0.7)",
    ],
    extrapolate: "clamp",
  });

  const iconOpacityLike = position.x.interpolate({
    inputRange: [-30, 0, 30],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  const iconOpacitySkip = position.x.interpolate({
    inputRange: [-30, 0, 30],
    outputRange: [1, 0, 0],
    extrapolate: "clamp",
  });

  const animatedCardStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [
      { translateX: position.x },
      { translateY: position.y },
      { rotate },
      {
        scale: transition.interpolate({
          inputRange: [0, 1],
          outputRange: [0.9, 1],
        }),
      },
      { translateY: verticalPosition },
    ],
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 30,
      onPanResponderMove: Animated.event(
        [null, { dx: position.x, dy: position.y }],
        { useNativeDriver: false },
      ),
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          Animated.timing(position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gesture.dy },
            duration: 300,
            useNativeDriver: false,
          }).start(() => {
            onRightSwipe && onRightSwipe();
          });
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          Animated.timing(position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gesture.dy },
            duration: 300,
            useNativeDriver: false,
          }).start(() => {
            onLeftSwipe && onLeftSwipe();
          });
        } else {
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const swipeRight = () => {
    Animated.timing(position, {
      toValue: { x: SCREEN_WIDTH + 100, y: 0 },
      duration: 600,
      useNativeDriver: false,
    }).start(() => {
      onRightSwipe && onRightSwipe();
    });
  };

  const swipeLeft = () => {
    Animated.timing(position, {
      toValue: { x: -SCREEN_WIDTH - 100, y: 0 },
      duration: 600,
      useNativeDriver: false,
    }).start(() => {
      onLeftSwipe && onLeftSwipe();
    });
  };

  return {
    panResponder,
    animatedCardStyle,
    backgroundColor,
    swipeLeft,
    swipeRight,
    position,
    iconOpacityLike,
    iconOpacitySkip,
  };
};

export default useSwipeCard;
