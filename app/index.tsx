import SwipeCard from "@/components/SwipeCard";
import { User } from "@/types/user";
import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const images = [
  "https://s3-alpha-sig.figma.com/img/faff/896c/a6910748644aa65711411f7281ff1a3e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hDMXQ9LPNqkINHvSzuKwWV46mEChol4xjh-8ECv3veSz4lekY7uXIcBKDYn-UEi~BNWo0X0Ti87tw~lBT03VIUUvjleO7m-Tn0W2yZ5Xs5VNksMaQHHpZRylf4jATfnmNefrQCCgLAM76ux9M3PYPpw~4Uae1jZTrp~Gh~RiVorTli2Q4iq~wAblm1Vdae-s7yW9CtCeSZ9H4D7G262PPzPpwAe4IUPyvYG5d8lc7jaOAaLTkCM0T0eJ1eDrLoHXZFVR6zP040M-C5Ic7~eq7hwc6gQticeWCPGQ19d~Xv5DAd1uOEiyKTshwXKLy0o~-FmdO5koZRMfDTf2SKPuBA__",
  "https://s3-alpha-sig.figma.com/img/c46f/af10/e7dc64f512de3b5f5bf8d984a57071d7?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CSnhFTeXMnbkLsUAJ0x1MISNUf7WcK3EJfNGVML-oLb2V3OqD8vQJLIyu1rvtvarPPbhaGug3chL3oTsiJlhhdxTTthb87hPiWIAQcFb8nHlswz~4AoVF0Rr0bTHjUUFjdffhPv5jgNwCfe7oxUFXbroCpxWnJhHQhoJvfK83iDLgdhi6KbiXgrlatF1mfuvmzI9R1CMwuQpXazG-Y~DbCceLsEPwMIvnHfQYBlDavmEZDohvnKOERXUkLnfcb2x1~saBI7P-H03IVql3lMRWQXUI5PUKsgxJOcgPK7VKTAJ47q4bQxr1HpRBq6g2Q-MGe8ym9DdANRVsL1DDXMrkg__",
  "https://s3-alpha-sig.figma.com/img/c74e/3ede/567bf0381a39e776aa384fea784f421a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SAIyWZiyzQDmGr-Nm~TtBmtakvXDHBlabQSGdAFZguCZjkaZTNdLGFVArGKDT2D59iZzdOPgyZa7K78OvpKqaHViNE0FTN~lYFu-9LZXoqNGoXmZ97CVMQAm6nzNSPSsiIlkjgf-TuX0Q2R0Y2n1kNzILu6RjZzZYaUgsXuN0EVDaqXdqDvYgAvUmUPkUOWsuDH7DI6Moxs~QV8jU3VEJGOLfb678d29hWvWwMw9lkj8FJKTMD4ky17dPsNeSxatfpJfu2zhgIBmrftBMQnhDuxx2iEiP00E482Xn~mAvoJcaS1FoppLecwrx3s8Rn~6x2XoBJeDdtx0uL0T3fejIw__",
];

const usersFake: User[] = [
  {
    id: "1",
    fullName: "Sandra Gómez",
    photo: images[0],
    age: 21,
    location: "Surco, Perú",
  },
  {
    id: "2",
    fullName: "Beatriz",
    photo: images[1],
    age: 22,
    location: "22 Km, Lima",
  },
  {
    id: "3",
    fullName: "Carmen",
    photo: images[2],
    age: 22,
    location: "Miraflores, Perú",
  },
];

export default function Index() {
  const [users, setUsers] = React.useState(usersFake);
  console.log(users.length);
  return (
    <SafeAreaProvider>
      <Text>asdasd</Text>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {users.map((user, index) => (
            <SwipeCard
              key={user.id}
              isFront={index === users.length - 1}
              onLeftSwipe={() => {
                setUsers((prevItems) => prevItems.slice(0, -1));
              }}
              onRightSwipe={() => {
                setUsers((prevItems) => prevItems.slice(0, -1));
              }}
              user={user}
            />
          ))}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  content: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
