import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import IconWraper from "../components/IconWraper";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={styles.imageLayout}
      >
        <Text style={[styles.city, styles.common]}>Dasari Industries</Text>
        <Text style={[styles.country, styles.common]}>India</Text>

        <IconWraper
          name="user"
          size="50"
          color="red"
          bodyText="8008"
          wraperStyle={styles.populationWraper}
          textStyle={styles.populationText}
        />

        <View style={styles.riseSetWraper}>
          <IconWraper
            name="sunrise"
            size="50"
            color="white"
            bodyText="6:48 am"
            wraperStyle={styles.sunRiseWraper}
            textStyle={styles.sunRiseSetText}
          />
          <IconWraper
            name="sunset"
            size="50"
            color="white"
            bodyText="5:48 pm"
            wraperStyle={styles.sunRiseWraper}
            textStyle={styles.sunRiseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  imageLayout: {
    flex: 1,
  },
  common: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  city: {
    fontSize: 40,
  },
  country: {
    fontSize: 30,
  },
  populationWraper: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  riseSetWraper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  sunRiseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  sunRiseWraper: { flex: 1, alignItems: "center" },
});
export default City;
