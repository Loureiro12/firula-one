import { IHeaderProps } from "@components/atoms/Header/types";

export interface IContentPageTemplateProps {
  isScrollable?: boolean;
  children?: React.ReactNode;
  headerProps?: IHeaderProps;
  footerComponent?: React.ReactNode;
}