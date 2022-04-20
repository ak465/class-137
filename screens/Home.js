import * as React from "react";
import {
  Text,
  View,
  Alert,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";
import axios from "axios";
import { ListItem } from "react-native-elements";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      list_data: [],
      url: "https://0f61-202-173-126-181.ngrok.io/",
    };
  }
  getPlanets = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then((response) => {
        return this.setState({
          list_data: response.data.data,
        });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  componentDidMount() {
      this.getPlanets()
  }
  renderItem = ({ item, index }) => {
    <ListItem
      key={index}
      title={`Planet : ${item.name}`}
      subtitle={`Distance from earth: ${item.distance_from_earth}`}
      titleStyle={styles.title}
      containerStyle={styles.listContainer}
      bottomDivider
      chevron
      onPress={() => {
        this.props.navigation.navigate("Details", { planet_name: item.name });
      }}
    />;
  };

  keyExtractor = (item, index) => {
    index.toString();
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.upperContainer}>
          <Text style={styles.headerText}>Planets World</Text>
        </View>
        <View style={styles.lowerContainer}>
          <FlatList
            data={this.state.list_data}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edc988",
  },
  upperContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#132743",
  },
  lowerContainer: {
    flex: 0.9,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainerText: {
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d7385e",
  },
  listContainer: {
    backgroundColor: "#eeecda",
  },
});
