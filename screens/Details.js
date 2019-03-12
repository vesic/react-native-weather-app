import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { bindActionCreators } from "redux";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
import Button from "../components/Button";

class Details extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("city", "A Nested Details Screen")
    };
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
          <Button onPress={() => this.props.navigation.navigate("Home")}>
            Go Back
          </Button>
        </CardSection>
      </Card>
    </View>
  );

  render = () => this.renderDetails(this.props.weather);
}

const mapStateToProps = state => ({
  weather: weatherReducer(state)
});

const weatherReducer = state => state.weather;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default (Details = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details));
