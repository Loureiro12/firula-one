export interface IGetUserStatusResponse {
  pendingData: {
    type: string;
    description: string;
    title: string;
    routeName: string;
  }[];
}
