import { User } from "@/types/user";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../Shared/IconButton";

const UserInfoSumary = ({ user }: { user: User }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.h2} numberOfLines={1}>
            {user.fullName}
          </Text>
          <Text style={styles.h2}>, {user.age}</Text>
        </View>

        <Text style={styles.p}>{user.location}</Text>
      </View>
      <View>
        <IconButton name="info-outline" style={styles.icon} color="white" />
      </View>
    </View>
  );
};

export default UserInfoSumary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    boxSizing: "border-box",
    width: "100%",
    position: "relative",
  },
  header: {
    flexDirection: "row",
  },
  h2: {
    color: "white",
    fontSize: 20,
    fontWeight: 700,
    maxWidth: "80%",
  },
  p: {
    color: "white",
    fontSize: 14,
    fontWeight: 400,
  },
  icon: {
    backgroundColor: "#FF6B86",
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
