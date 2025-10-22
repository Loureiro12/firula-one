import React from "react";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";

import { useMainHelpCenter } from "./hooks";

export const MainHelpCenterScreen = () => {
  const { handleGoBack } = useMainHelpCenter();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Central de Ajuda",
        onArrowBackPress: handleGoBack,
      }}
    ></ContentPageTemplate>
  );
};
