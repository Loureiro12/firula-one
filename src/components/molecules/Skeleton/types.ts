import { FlexAlignType } from "react-native";

export interface ISkeleton {
  width?: number;
  height: number;
  radius?: number;
  align?: FlexAlignType;
  testIDPrefix?: string;
  isFullWidth?: boolean;
}
