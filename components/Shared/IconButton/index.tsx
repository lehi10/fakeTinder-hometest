import React from 'react';
import { TouchableOpacity, StyleSheet, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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
  color = '#000',
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style || styles.button}>
      <MaterialIcons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
