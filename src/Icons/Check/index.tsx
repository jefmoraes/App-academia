import Svg, { Polyline } from 'react-native-svg';
import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

type Props = {
  color?: string;
  strokeWidth?: number;
  height?: number;
  width?: number;
  visible?: boolean;
}

Check.defaultProps = {
  visible: true,
  width: 10,
  height: 8,
  strokeWidth: 3
}

export function Check({
  color, 
  strokeWidth, 
  height, 
  width,
  visible,
  ...rest
}: Props){
  const { colors } = useContext(ThemeContext);
  const padding = strokeWidth / 2;

  return(
    <Svg     
      {...rest}   
      width={width}
      height={height}
      fill='none'
    >
      <Polyline 
        points={`
          ${width - padding}, 
          ${padding} ${width/3},
          ${height - padding} ${padding},
          ${height/2}
        `}
        strokeOpacity={visible ? '1' : '0'}
        stroke={color ? color : colors.timer}
        strokeWidth={strokeWidth ? strokeWidth : 2}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
}