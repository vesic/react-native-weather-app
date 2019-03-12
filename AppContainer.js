import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, Details, Settings } from "./screens";

const AppNavigator = createStackNavigator(
  {
    Home,
    Details,
    Settings
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
