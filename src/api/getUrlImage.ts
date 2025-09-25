import apiClient from "./apiClient";

export type GetUrlImageType = {

    url: string;
    signedUrl: string;
};

export const getUrlImage = async (
  companyName: string
): Promise<GetUrlImageType> => {
  const data = {
    name: companyName,
    contentType: "image/png",
  };

  const response = await apiClient.post<GetUrlImageType>("image/uploads", data);
  return response.data;
};
