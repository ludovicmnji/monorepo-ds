import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as fonts from '@fonts'
import * as colors from '@colors'

const BasicButton = styled.div`
  display: inline-block;
  font-family: ${fonts.PRIMARY_FONT};
  font-size: 13px;
  font-weight: 500;
  padding: 14px 22px;
  border-radius: 2px;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
`

export const PrimaryButton = BasicButton.extend`
  color: ${colors.PRIMARY_WHITE};
  background-color: ${colors.PRIMARY_BLUE};
  padding: 14px 22px;

  &:hover {
    background-color: ${colors.PRIMARY_BLUE_HOVER};
  }
`

export const SecondaryButton = BasicButton.extend`
  color: ${colors.PRIMARY_BLUE};
  background-color: ${colors.PRIMARY_WHITE};
  border: 3px solid ${colors.PRIMARY_BLUE};
  padding: 14px 22px;
  box-sizing: content-box;

  &:hover {
    color: ${colors.PRIMARY_WHITE};
    background-color: ${colors.PRIMARY_BLUE};
  }
`

export const TertiaryButton = BasicButton.extend`
  color: ${colors.PRIMARY_WHITE};
  background-color: ${colors.PRIMARY_BLACK};
  padding: 14px 22px;

  &:hover {
    background-color: ${colors.PRIMARY_BLUE};
  }
`

const BodyButton = styled.div`
  display: inline-block;
  font-family: ${fonts.PRIMARY_FONT};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.7;
  color: ${colors.PRIMARY_WHITE};
  padding: 14px 120px;
  border-radius: 2px;
  cursor: pointer;
  text-align: center;
`

export const BodyButtonGreen = BodyButton.extend`
  color: ${colors.PRIMARY_WHITE};
  background-color: ${colors.PRIMARY_GREEN};

  &:hover {
    background-color: ${colors.PRIMARY_GREEN_HOVER};
  }
`

export const BodyButtonBlue = BodyButton.extend`
  color: ${colors.PRIMARY_WHITE};
  background-color: ${colors.PRIMARY_BLUE};

  &:hover {
    background-color: ${colors.PRIMARY_BLUE_HOVER};
  }
`

const BigButtonWrapper = styled.div`
  font-family: ${fonts.PRIMARY_FONT};
  font-weight: 300;
  line-height: 1.4;
  color: ${colors.PRIMARY_WHITE};
  background-color: ${colors.PRIMARY_BLUE};
  border-radius: 2px;
  width: 260px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.PRIMARY_BLUE_HOVER};
  }

  & span:first-child {
    font-size: 22px;
    font-weight: 500;
  }

  & span:last-child {
    font-size: 13px;
    font-weight: 400;
  }
`

export const BigButton = ({ more, children }) => (
  <BigButtonWrapper>
    <span>{children}</span>
    {more && <span>{more}</span>}
  </BigButtonWrapper>
)

BigButton.propTypes = {
  more: PropTypes.any,
  children: PropTypes.any.isRequired,
}
