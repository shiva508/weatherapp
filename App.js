import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import CurrentWeather from "./src/screens/CurrentWeather";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Tabs from "./src/components/Tabs";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
