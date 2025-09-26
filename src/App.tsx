import * as React from "react";
import RootStack from "./navigation";
import { BottomDrawerProvider } from "./hooks";

export function App() {
  return (
    <>
      <BottomDrawerProvider>
        <RootStack />
      </BottomDrawerProvider>
    </>
  );
}
