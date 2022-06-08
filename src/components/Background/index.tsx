import React, { ReactNode, useContext } from 'react'
import { Gradient } from './styles'
import { ThemeContext } from 'styled-components/native';

type Props = {
  children:ReactNode; 
}
export function Background({children}:Props){
  const { colors } = useContext(ThemeContext)
  return(
    <Gradient>
      {children}
    </Gradient>
  )
} 