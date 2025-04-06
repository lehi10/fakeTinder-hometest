import { AntDesign, Entypo } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "expo-router";

const Header = () => {
  const drawer = useNavigation();

  return (
    <View style={styles.header}>
      <Entypo
        name="menu"
        style={styles.icon}
        onPress={() => drawer.toggleDrawer()}
      />
      <AntDesign name="filter" style={styles.icon} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  icon: {
    fontSize: 24,
    color: "white",
  },
});
