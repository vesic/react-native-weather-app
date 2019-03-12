import React, { Component } from "react";
import { View, Text, Platform, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { bindActionCreators } from "redux";
import Search from "../components/Search";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
import Button from "../components/Button";

class Home extends Component {
  componentDidMount() {
    this.props.navigation.setParams({
      handleLeftButton: this.handleLeftButton
    });

    setTimeout(() => {
      this.props.actions.getPosition();
    }, 0);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Weather",
      headerRight: (
        <View
          style={{
            marginRight: 10,
            marginTop: 5
          }}
        >
          <Icon
            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
            color="#fff"
            size={24}
            onPress={() => navigation.navigate("Settings")}
          />
        </View>
      ),
      headerLeft: (
        <View
          style={{
            marginLeft: 10,
            marginTop: 5
          }}
        >
          <Icon
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            color="#fff"
            size={24}
            onPress={navigation.getParam("handleLeftButton")}
          />
        </View>
      )
    };
  };

  handleLeftButton = () => {
    const { toggleSearch } = this.props.actions;
    toggleSearch(true);
  };

  renderDetails = weather => (
    <View>
      <Card>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 32, padding: 5 }}>
              {weather.name}
            </Text>
          </View>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 12 }}>Main</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 22 }}>
              {weather.weather[0].main}
            </Text>
          </View>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 12 }}>
              Description
            </Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 22 }}>
              {weather.weather[0].description}
            </Text>
          </View>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 12 }}>
              Temperature
            </Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 22 }}>
              {weather.main.temp} {" \u00B0C"}
            </Text>
          </View>
        </CardSection>
        <CardSection>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <View>
              <Text>
                Min: {weather.main.temp_min} {"\u00B0C"}
              </Text>
            </View>
            <View>
              <Text>
                Max: {weather.main.temp_max} {"\u00B0C"}
              </Text>
            </View>
          </View>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 12 }}>Humidity</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 22 }}>
              {weather.main.humidity}
            </Text>
          </View>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 12 }}>Pressure</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 22 }}>
              {weather.main.pressure}
            </Text>
          </View>
        </CardSection>
      </Card>
      <Card>
        <CardSection>
          <Button
            onPress={() =>
              this.props.navigation.navigate("Details", { city: weather.name })
            }
          >
            More for {weather.name}
          </Button>
        </CardSection>
      </Card>
    </View>
  );

  render() {
    const { weather, showIndicator } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {showIndicator ? (
          <View style={{ paddingTop: 30 }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          this.renderDetails(weather)
        )}
        <Search />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  weather: weatherReducer(state),
  showIndicator: indicatorReducer(state)
});

const weatherReducer = state => state.weather;
const indicatorReducer = state => state.showIndicator;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
