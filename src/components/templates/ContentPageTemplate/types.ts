import { IHeaderProps } from "@components/atoms/Header/types";

export interface IContentPageTemplateProps {
  testIDPrefix?: string;
  isScrollable?: boolean;
  children?: React.ReactNode;
  headerProps?: IHeaderProps;
}