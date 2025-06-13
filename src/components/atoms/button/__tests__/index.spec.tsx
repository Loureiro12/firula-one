import { render } from "@testing-library/react-native";
import { Button } from "..";
import type { IButtonProps } from "../types";

jest.mock("@expo/vector-icons", () => ({
  Ionicons: "Ionicons",
}));

describe("Button Component", () => {
  const mockProps: IButtonProps = {
    label: "Click me",
    iconName: "accessibility",
    testIDPrefix: "login",
    onPress: jest.fn(),
  };

  test("renders label correctly", () => {
    const { getByText } = render(<Button {...mockProps} />);
    expect(getByText("Click me")).toBeTruthy();
  });

  test("renders icon correctly", () => {
    const { getByTestId } = render(<Button {...mockProps} />);
    expect(getByTestId("login-button")).toBeTruthy();
  });

  test("applies correct testID to Pressable", () => {
    const { getByTestId } = render(<Button {...mockProps} />);
    const button = getByTestId("login-button");
    expect(button).toBeTruthy();
  });

  test("matches snapshot", () => {
    const tree = render(<Button {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly without testIDPrefix", () => {
    const propsWithoutPrefix: IButtonProps = {
      label: "Click me",
      iconName: "home",
      onPress: jest.fn(),
    };
    const { getByText } = render(<Button {...propsWithoutPrefix} />);
    expect(getByText("Click me")).toBeTruthy();
  });
});
