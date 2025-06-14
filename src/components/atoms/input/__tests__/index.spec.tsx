import { render, fireEvent, act } from '@testing-library/react-native';
import { Input } from '../';
import React from 'react';

jest.mock("@expo/vector-icons", () => ({
  Ionicons: "Ionicons",
}));

describe('Input Component', () => {
  const baseProps = {
    label: 'Test Label',
    placeholder: 'Enter text',
    onChangeText: jest.fn(),
    testIDPrefix: 'login',
  };

  it('renders correctly with basic props', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <Input {...baseProps} />
    );
    
    expect(getByText('Test Label')).toBeTruthy();
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
    expect(getByTestId('login-input-container')).toBeTruthy();
  });

  it('shows error message when provided', () => {
    const { getByText } = render(
      <Input {...baseProps} errorMensage="Invalid input" />
    );
    
    expect(getByText('Invalid input')).toBeTruthy();
  });

  it('renders left icon when provided', () => {
    const { queryByTestId } = render(
      <Input {...baseProps} iconLeft="search" />
    );
    
    expect(queryByTestId('login-input-container')).toHaveProp('children');
  });

  it('renders right icon when provided', () => {
    const { queryByTestId } = render(
      <Input {...baseProps} iconRight="close" />
    );
    
    expect(queryByTestId('login-input-container')).toHaveProp('children');
  });

  describe('Password Input', () => {
    it('toggles password visibility', async () => {
      const { getByTestId } = render(
        <Input {...baseProps} isPassword />
      );
      
      const input = getByTestId('text-input');
      expect(input.props.secureTextEntry).toBe(true);
      
      await act(async () => {
        fireEvent.press(getByTestId('login-toggle-password'));
      });
      
      expect(input.props.secureTextEntry).toBe(false);
    });

    it('disables toggle when input is disabled', async () => {
      const { getByTestId } = render(
        <Input {...baseProps} isPassword isDisabled />
      );
      
      const toggle = getByTestId('login-toggle-password');
      expect(toggle.props.accessibilityState.disabled).toBe(true);
    });
  });

  it('is disabled when isDisabled is true', () => {
    const { getByTestId } = render(
      <Input {...baseProps} isDisabled />
    );
    
    const input = getByTestId('text-input');
    expect(input.props.editable).toBe(false);
  });

  it('calls onChangeText when text is entered', () => {
    const { getByTestId } = render(
      <Input {...baseProps} />
    );
    
    const input = getByTestId('text-input');
    fireEvent.changeText(input, 'new text');
    
    expect(baseProps.onChangeText).toHaveBeenCalledWith('new text');
  });

  it('renders correctly without testIDPrefix', () => {
    const { queryByTestId } = render(
      <Input {...baseProps} testIDPrefix={undefined} />
    );
    
    expect(queryByTestId('input-container')).toBeNull();
  });

  it('matches snapshot with basic props', () => {
    const tree = render(
      <Input {...baseProps} />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});