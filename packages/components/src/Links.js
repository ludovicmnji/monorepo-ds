import styled from 'styled-components'

import * as fonts from '@fonts'
import * as colors from '@colors'

const BasicLink = styled.a`
  font-family: ${fonts.PRIMARY_FONT};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`

export const PrimaryLink = BasicLink.extend`
  font-family: ${fonts.PRIMARY_FONT};
  font-size: 13px;
  font-weight: 500;
  color: ${colors.PRIMARY_BLUE};
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid ${colors.PRIMARY_BLUE};
  }
`

export const SecondaryLink = BasicLink.extend`
  font-family: ${fonts.PRIMARY_FONT};
  font-size: 13px;
  font-weight: 500;
  color: ${colors.PRIMARY_BLACK};
  text-decoration: none;

  &:hover {
    color: ${colors.PRIMARY_BLUE};
  }
`
