import { render } from '@testing-library/react-native';

import ProfileScreen, { CustomText } from '../index';

describe('Profile Screen', () => {
  test('Text renders correctly on HomeScreen', () => {
    const { getByText } = render(<ProfileScreen />);

    getByText('Welcome!');
  });

  test('CustomText renders correctly', () => {
    const tree = render(<CustomText>Some text</CustomText>).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
