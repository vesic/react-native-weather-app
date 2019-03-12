import React, { Component } from "react";
import { View, Text, Switch } from "react-native";

const METRIC = "metric";
const IMPERIAL = "imperial";

class Settings extends Component {
  state = {
    unitsFormat: METRIC
  };

  static navigationOptions = {
    title: "Settings"
  };

  render() {
    const { unitsFormat } = this.state;

    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20
          }}
        >
          <View style={{ flex: 1 }}>
            <Text>Units format</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Switch
                value={unitsFormat === METRIC}
                onValueChange={() => {
                  const format = unitsFormat === METRIC ? IMPERIAL : METRIC;
                  this.setState({ unitsFormat: format });
                }}
              />
              <Text style={{ marginLeft: 10 }}>
                {unitsFormat.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Settings;
