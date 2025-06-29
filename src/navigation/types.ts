import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthRootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AppTabStackParamList = {
  TabRootStack: undefined;
  ValidateReservations: undefined;
  Home: undefined;
  Agenda: undefined;
  Metrics: undefined;
  Adjustments: undefined;
  PendingProfileScreen: undefined;
  EditProfile: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthRootStackParamList>;
  App: NavigatorScreenParams<AppTabStackParamList>;
  Splash: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}