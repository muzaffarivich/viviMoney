import * as React from 'react';
import {Animated, GestureResponderEvent, TouchableOpacity} from 'react-native';
import Svg, {Circle, G, Path} from 'react-native-svg';
import {colors} from '../../constants/color';

let AnimatedPath = Animated.createAnimatedComponent(Path);

export interface IconProps {
  color?: string;
  active?: boolean;
  size?: number;
  style?: any;
  onPress?: () => void;
}

export interface PressableIconProps extends React.ComponentProps<any> {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export let PressableIcon = ({onPress, children}: PressableIconProps) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export function SearchIcon({
  color = colors.lingthBlack,
  active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Circle cx={11} cy={11} r={8} stroke={colors.lingthGray} />
      <Path d="M21 21L16.65 16.65" stroke={colors.lingthGray} />
    </Svg>
  );
}

export function NotificationsIcon({
  color = colors.lingthBlack,
  active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 25 30" {...props}>
      <Path
        clipRule="evenodd"
        d="M12.5 23.712c6.303 0 9.218-.808 9.5-4.054 0-3.243-2.033-3.034-2.033-7.014C19.967 9.537 17.021 6 12.5 6c-4.521 0-7.467 3.536-7.467 6.645 0 3.979-2.033 3.77-2.033 7.013.283 3.258 3.198 4.054 9.5 4.054z"
        stroke="#939393"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.17 27.075c-1.525 1.693-3.903 1.713-5.442 0"
        stroke="#939393"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={17}
        cy={8}
        r={6}
        fill="#D0D274"
        stroke="#000"
        strokeWidth={4}
      />
    </Svg>
  );
}

export function ArrowRightIcon({
  color = colors.black,
  active,
  size = 20,
  style,
}: IconProps) {
  let props = {
    fill: color,
    stroke: color,
    height: size,
    width: size,
  };
  return (
    <Svg viewBox="0 0 24 20" {...props}>
      <Path
        d="M8 21l8-9-8-9"
        stroke="#725BFE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ArrowDownIcon({
  color = colors.black,
  active,
  size = 20,
  style,
}: IconProps) {
  let props = {
    fill: color,
    stroke: color,
    height: size,
    width: size,
  };
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path
        d="M6 10.5l6 3.75 6-3.75"
        stroke="#111"
        strokeOpacity={0.5}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SendIcon({
  color = '#E1FC52',
  active,
  size = 20,
  style,
}: IconProps) {
  let props = {
    fill: color,
    stroke: color,
    height: size,
    width: size,
  };
  return (
    <Svg viewBox="0 0 21 21" {...props}>
      <Path
        clipRule="evenodd"
        d="M9.693 10.638S-2.283 8.161 1.88 5.758C5.39 3.731 17.495.245 19.186 1.146c.9 1.69-2.585 13.795-4.613 17.307-2.402 4.162-4.88-7.815-4.88-7.815z"
        stroke="#111"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.693 10.638l9.493-9.492"
        stroke="#111"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function RightArrowIcon({
  color = colors.lingthYellow,
  active,
  size = 20,
  style,
}: IconProps) {
  let props = {
    fill: color,
    stroke: color,
    height: size,
    width: size,
  };
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path
        d="M19.75 11.726h-15M13.7 5.701l6.05 6.024-6.05 6.025"
        stroke="#111"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function RoundsIcon({
  color = colors.lingthYellow,
  active,
  size = 20,
  style,
}: IconProps) {
  let props = {
    fill: color,
    stroke: color,
    height: size,
    width: size,
  };
  return (
    <Svg viewBox="0 0 17 6" {...props}>
      <Path
        d="M2.57 5.143A2.57 2.57 0 102.57 0a2.57 2.57 0 000 5.142zM14.294 5.142a2.57 2.57 0 100-5.142 2.57 2.57 0 000 5.142z"
        fill="#111"
      />
    </Svg>
  );
}

export function GraphIcon({
  color = colors.lingthBlack,
  active,
  size = 20,
  style,
}: IconProps) {
  let props = {
    fill: color,
    stroke: color,
    height: size,
    width: size,
  };
  return (
    <Svg viewBox="0 0 21 20" {...props}>
      <Path
        clipRule="evenodd"
        d="M12.179 1.349c-.708.815-.99 5.94-.167 6.764.823.822 5.768.406 6.956-.53 2.858-2.25-4.53-8.836-6.79-6.234z"
        stroke="#939393"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M16.638 11.79c1.084 1.084-1.79 7.264-7.486 7.264a7.701 7.701 0 01-7.702-7.7c0-5.3 5.229-8.69 6.728-7.192.863.863-.11 4.924 1.439 6.473 1.548 1.55 5.937.071 7.02 1.155z"
        stroke="#939393"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BudgetingIcon({
  color = colors.lingthBlack,
  active,
  size = 20,
  style,
}: IconProps) {
  let props = {
    fill: color,
    stroke: color,
    height: size,
    width: size,
  };
  return (
    <Svg viewBox="0 0 20 22" {...props}>
      <Path
        d="M9.961 15.517v-2.628M19.09 10.477l-.03.021c-2.421 1.493-5.62 2.394-9.103 2.394-3.484 0-6.673-.901-9.094-2.393l-.03-.022"
        stroke="#939393"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M.75 12.35c0-6.151 2.303-8.202 9.211-8.202 6.91 0 9.211 2.05 9.211 8.203 0 6.152-2.302 8.203-9.21 8.203-6.909 0-9.212-2.051-9.212-8.203z"
        stroke="#939393"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.224 4.37v-.63c0-1.265-.923-2.29-2.06-2.29H8.759c-1.137 0-2.06 1.025-2.06 2.29v.63"
        stroke="#939393"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
