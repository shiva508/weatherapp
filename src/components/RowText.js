import { StyleSheet, Text, View } from "react-native";

const RowText = ({
  messageOne,
  messageTwo,
  containerStyle,
  messageOneStyle,
  messageTwoStyle,
}) => {
  return (
    <View styles={containerStyle}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default RowText;
