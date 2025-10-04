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
  Company: undefined;
  CreateCompany: undefined;
  AddNewCompanyAddress: undefined;
  CreateNewCourt: undefined;
  CourtOpeningHours: {
    companyBlockId: string;
  };
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