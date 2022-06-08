import { useContext } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Svg, { Color, Polyline, SvgProps } from 'react-native-svg';

import { ThemeContext } from 'styled-components';

type Props = SvgProps & {
  color?: Color;
  style?: StyleProp<TextStyle>;
  right?: boolean;
}

export function Chevron({
  color, 
  right,
  style,
  ...rest
}: Props){

  const { colors } = useContext(ThemeContext);
  const strokeWidth = 2;
  const padding = strokeWidth / 2;

  const width = 10;
  const height = 18;
  return(
    <Svg
      {...rest}
      width={width}
      height={height}
      fill='none'
      style={[style, { transform: right && [{ rotate: '180deg' }] }]}
    >
      <Polyline 
        points={
        `${width - padding}, 
          ${padding} ${padding},
          ${height / 2} ${width - padding},
          ${height - padding}`
        }
        stroke={color ? color : colors.icon}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
}