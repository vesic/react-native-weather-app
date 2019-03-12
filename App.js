import React from "react";
import Container from "./AppContainer";
import { Provider } from "react-redux";
import store from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
