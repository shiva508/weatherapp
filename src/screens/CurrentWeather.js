import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wraper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temparature}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <RowText
          messageOne={"High: 8"}
          messageTwo={"Low: 4"}
          containerStyle={styles.highLowWraper}
          messageOneStyle={styles.highLow}
          messageTwoStyle={styles.highLow}
        ></RowText>
      </View>
      <RowText
        messageOne={"Its sunny"}
        messageTwo={"Its perfect t-short weather"}
        containerStyle={styles.bodyWraper}
        messageOneStyle={styles.desription}
        messageTwoStyle={styles.message}
      ></RowText>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wraper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  temparature: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLowWraper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  bodyWraper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  desription: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
  highLowContainerStyle: {},
  highLowText: {},
});

export default CurrentWeather;
