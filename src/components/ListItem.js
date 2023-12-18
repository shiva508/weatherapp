import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
const ListItem = (props) => {
  const { dt_txt, max, min, condition } = props;
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{max}</Text>
      <Text style={styles.temp}>{min}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 3,
    backgroundColor: "pink",
    borderRadius: 12,
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
});
export default ListItem;
