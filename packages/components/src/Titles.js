import styled from 'styled-components'

import * as fonts from '@fonts'
import * as colors from '@colors'

export const Title1 = styled.h1`
  font-family: ${fonts.PRIMARY_FONT};
  font-weight: 500;
  font-size: 26px;
  color: ${colors.PRIMARY_BLACK};
  margin: 0;
  text-align: ${props => props.align || 'left'};
`

export const Title2 = styled.h2`
  font-family: ${fonts.PRIMARY_FONT};
  font-weight: 500;
  font-size: 18px;
  color: ${colors.PRIMARY_BLACK};
  margin: 0;
  text-align: ${props => props.align || 'left'};
`

export const Title3 = styled.h3`
  font-family: ${fonts.PRIMARY_FONT};
  font-weight: 400;
  font-size: 17px;
  color: ${colors.PRIMARY_BLACK};
  margin: 0;
  text-align: ${props => props.align || 'left'};
`

export const Title4 = styled.h4`
  font-family: ${fonts.SECONDARY_FONT};
  font-weight: 500;
  font-size: 38px;
  color: ${colors.PRIMARY_GREEN};
  margin: 0;
  text-align: ${props => props.align || 'left'};
`

export const Title5 = styled.h5`
  font-family: ${fonts.PRIMARY_FONT};
  font-weight: 500;
  font-size: 24px;
  color: ${colors.PRIMARY_BLACK};
  margin: 0;
  text-align: ${props => props.align || 'left'};
`

export const Title6 = styled.h6`
  font-family: ${fonts.PRIMARY_FONT};
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;
  color: ${colors.GREY_SHADE_3};
  margin: 0;
  text-align: ${props => props.align || 'left'};
`
