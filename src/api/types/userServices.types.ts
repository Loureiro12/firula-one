export interface IGetUserStatusResponse {
  pendingData: {
    type: string;
    description: string;
    title: string;
    routeName: string;
  }[];
}

export interface IUpdateUserProfileRequest {
  name: string;
  phone: string;
}
