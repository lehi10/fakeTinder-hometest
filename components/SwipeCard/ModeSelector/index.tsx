import RoundedButton from "@/components/Shared/Buttons/RoundedButton";
import { MatchType } from "@/types/user";
import { StyleSheet, View } from "react-native";

const ModeSelector = ({
  selected,
  onChange,
}: {
  selected: MatchType;
  onChange: (selected: MatchType) => void;
}) => {
  return (
    <View style={styles.container}>
      <RoundedButton
        image={""}
        active={selected === MatchType.FRIENDSHIP}
        label="Amistad"
        onPress={() => onChange(MatchType.FRIENDSHIP)}
      />
      <RoundedButton
        image={""}
        active={selected === MatchType.DATING}
        label="Citas"
        onPress={() => onChange(MatchType.DATING)}
      />
      <RoundedButton
        image={""}
        active={selected === MatchType.RELATIONSHIP}
        label="Relación"
        onPress={() => onChange(MatchType.RELATIONSHIP)}
      />
    </View>
  );
};

export default ModeSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 30,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {},
});
