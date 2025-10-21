import { TouchableOpacityProps } from "react-native";
import { IAddressData } from "src/api/types/companyService.types";

export interface ICreateCompany extends TouchableOpacityProps{
  cnpj: string;
  name: string;
  status: string;
  mobilePhone?: string;
  companyAddress?: IAddressData
}
