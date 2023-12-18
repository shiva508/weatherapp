import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
const IconWraper = ({
  name,
  size,
  color,
  bodyText,
  wraperStyle,
  textStyle,
}) => {
  return (
    <View style={wraperStyle}>
      <Feather name={name} size={+size} color={color} />
      <Text style={textStyle}>{bodyText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
export default IconWraper;
