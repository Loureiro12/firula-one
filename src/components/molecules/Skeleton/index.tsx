import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';


import styles from './styles';
import { ISkeleton } from './types';
import { theme } from '@styles/theme';
import { horizontalScale, moderateScale, screenWidth } from 'src/utils/dimensions';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const DEFAULT_ANIMATION_DURATION = 2000;
// This value is -1 for the loop to be infinite.
const NUMBER_OF_LOOPS = -1;

export const Skeleton = ({
  width,
  height,
  radius,
  align,
  testIDPrefix,
}: ISkeleton) => {
  const x = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(x.value, [0, 1], [-screenWidth, screenWidth]),
      },
    ],
  }));

  useEffect(() => {
    x.value = withRepeat(
      withTiming(1, { duration: DEFAULT_ANIMATION_DURATION }),
      NUMBER_OF_LOOPS,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container} testID={`${testIDPrefix}-skeleton`}>
      <View
        style={[
          styles.box,
          { alignSelf: align },
          {
            width: horizontalScale(width),
            height: moderateScale(height),
            borderRadius: moderateScale(radius || 4),
          },
        ]}>
        <AnimatedLinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[theme.colors.gray.gray06, theme.colors.gray.gray02, theme.colors.gray.gray06]}
          style={[{ ...StyleSheet.absoluteFillObject }, animationStyle]}
        />
      </View>
    </View>
  );
};
