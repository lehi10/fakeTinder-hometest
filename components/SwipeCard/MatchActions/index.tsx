import IconButton from "@/components/Shared/IconButton";
import { View, StyleSheet } from "react-native";

const MatchActions = () => {
  return (
    <View style={styles.container}>
      <IconButton
        name="close"
        size={30}
        color="#FFFFFF"
        onPress={() => console.log("Close pressed")}
        style={[styles.skip, styles.icon]}
      />
      <IconButton
        name="favorite"
        size={30}
        color="#FF6B86"
        onPress={() => console.log("Heart pressed")}
        style={[styles.superLike, styles.icon]}
      />
      <IconButton
        name="check"
        size={30}
        color="#FFFFFF"
        onPress={() => console.log("Check pressed")}
        style={[styles.like, styles.icon]}
      />
    </View>
  );
};

export default MatchActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
  },
  skip: {
    backgroundColor: "#D0BFBF",
  },
  superLike: {
    backgroundColor: "white",
  },
  like: {
    backgroundColor: "#FEB5DB",
  },
  icon: {
    width: 58,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
