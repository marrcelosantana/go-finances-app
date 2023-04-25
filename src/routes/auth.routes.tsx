import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn";
import { TabRoutes } from "./tab.routes";

type AuthRoutes = {
  // signIn: undefined;
  tabs: undefined;
};

export type AuthNavigatorRoutesProps =
  NativeStackNavigationProp<AuthRoutes> & {};

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {/* <Screen name="signIn" component={SignIn} /> */}
      <Screen name="tabs" component={TabRoutes} />
    </Navigator>
  );
}
