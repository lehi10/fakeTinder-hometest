import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type IconButtonProps = {
  name: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

const IconButton: React.FC<IconButtonProps> = ({
  name,
  size = 24,
  color = "#000",
  onPress,
  style,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style || styles.button, isPressed && styles.pressedButton]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <MaterialIcons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Color de fondo predeterminado
  },
  pressedButton: {
    backgroundColor: "#d0d0d0", // Color de fondo cuando está presionado
    transform: [{ scale: 0.95 }], // Efecto de escala al presionar
  },
});

export default IconButton;
