import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

const RoundedButton = ({
  image,
  active,
  label,
  onPress,
}: {
  image?: string;
  active: boolean;
  label?: string;
  onPress?: () => void;
}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={[style.iconContainer, active && style.selected]}
        onPress={onPress}
      >
        <ImageBackground style={style.icon}></ImageBackground>
      </TouchableOpacity>
      <Text style={style.label}>{active && label}</Text>
    </View>
  );
};
export default RoundedButton;

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  iconContainer: {
    backgroundColor: "white",
    width: 52,
    height: 52,
    borderRadius: 52,
  },
  icon: {
    width: "100%",
    height: "100%",
    borderRadius: 52,
    backgroundColor: "white",
  },
  selected: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFB1C7",
    padding: 2,
    width: 58,
    height: 58,
  },
  label: {
    fontSize: 14,
    fontWeight: 700,
    color: "white",
  },
});
