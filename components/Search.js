import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, TextInput } from "react-native";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { bindActionCreators } from "redux";

class Search extends Component {
  state = {
    text: ""
  };

  render() {
    const { text } = this.state;
    const { isVisible } = this.props;

    return (
      <View>
        <Modal animationType="fade" transparent={true} visible={isVisible}>
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, .7)",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ width: "100%" }}>
              <TextInput
                style={{
                  marginHorizontal: 75,
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  backgroundColor: "#fff",
                  color: "#000",
                  fontSize: 22
                }}
                onChangeText={text => this.setState({ text })}
                value={text}
                autoFocus
                autoCorrect={false}
                autoCapitalize={"words"}
              />
              <TouchableHighlight
                style={{ alignSelf: "center", marginTop: 20 }}
                onPress={this.onSearch}
              >
                <Text style={{ fontSize: 32, color: "#fff" }}>Dig</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  onSearch = () => {
    const { toggleSearch, getByCity } = this.props.actions;
    const { text } = this.state;

    toggleSearch(false);
    getByCity(text);
    this.setState({ text: "" });
  };
}

const mapStateToProps = state => ({
  isVisible: state.isVisible
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
