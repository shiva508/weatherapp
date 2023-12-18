import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "../components/ListItem";
import Empty from "../components/Empty";
const DATA_TEST = [];
const DATA = [
  {
    dt_txt: "2022-08-30 18:00:00",
    main: {
      temp_min: 29.14,
      temp_max: 28.1,
    },

    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-09-03 15:00:00",
    main: {
      temp_min: 29.14,
      temp_max: 28.1,
    },

    weather: [
      {
        main: "Clouds",
      },
    ],
  },
  {
    dt_txt: "2022-08-03 15:00:00",
    main: {
      temp_min: 8.65,
      temp_max: 88.1,
    },

    weather: [
      {
        main: "Clouds",
      },
    ],
  },
];
const UpcomingWeather = () => {
  const itemRender = ({ item }) => {
    return (
      <ListItem
        dt_txt={item.dt_txt}
        condition={item.weather[0].main}
        min={item.main.temp_min}
        max={item.main.temp_max}
      ></ListItem>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/nature.jpg")}
        style={styles.image}
      >
        <Text>Upcoming weather</Text>

        <FlatList
          data={DATA}
          renderItem={itemRender}
          keyExtractor={(item) => item.dt_txt}
          ListEmptyComponent={Empty}
        ></FlatList>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "red",
  },
  image: { flex: 1 },
});
export default UpcomingWeather;
