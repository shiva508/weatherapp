import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OurChild = ({ message }) => {
  return (
    <SafeAreaView>
      <View style={{ height: 200, width: 200, backgroundColor: "red" }}>
        <Text>{message}</Text>
      </View>
    </SafeAreaView>
  );
};
export default OurChild;
