import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as fonts from '@fonts'
import * as colors from '@colors'

import ProgressEgg from 'ProgressEgg'

const ProjectCardPicture = styled.div`
  background-image: url('${props => props.url}');
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 136px;
`

const ProjectCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`

const ProjectCardTitle = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: ${colors.PRIMARY_BLUE};
  margin: 0;
`

const ProjectCardOwner = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.GREY_SHADE_2};
`

const ProjectCardDiscretText = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: ${colors.GREY_SHADE_2};
`

const ReverseWrapper = styled.div`
  background-color: ${colors.PRIMARY_BLUE};
  color: ${colors.PRIMARY_WHITE};
  font-size: 15px;
  padding: 20px 10px;
  width: 100%;
  height: 136px;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;
`

const ProjectCardColumns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
`

const ProjectCardWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid ${colors.GREY_SHADE_5};
  border-radius: 2px;
  width: 218px;
  font-family: ${fonts.PRIMARY_FONT};
  cursor: pointer;

  & ${/* sc-sel */ ProjectCardPicture} {
    transition: opacity 350ms ease-in-out;
    opacity: 1;
  }

  > ${/* sc-sel */ ReverseWrapper} {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 350ms ease-in-out;
    opacity: 0;
  }

  &:hover {
    ${/* sc-selector */ ProjectCardPicture} {
      opacity: 0;
    }

    > ${/* sc-selector */ ReverseWrapper} {
      opacity: 1;
    }
  }
`

const ProjectCard = ({
  title,
  owner,
  shortDescription,
  category,
  picture,
  amount,
  progress,
  deadline,
}) => (
  <ProjectCardWrapper>
    <ProjectCardPicture url={picture} />
    <ReverseWrapper>{shortDescription}</ReverseWrapper>
    <ProjectCardInfo>
      <ProjectCardTitle>{title}</ProjectCardTitle>
      <ProjectCardColumns>
        <ProjectCardOwner>{owner}</ProjectCardOwner>
        <ProjectCardDiscretText>{category}</ProjectCardDiscretText>
      </ProjectCardColumns>
      <ProjectCardColumns>
        <ProjectCardColumns>
          <ProgressEgg progress={progress} />
          <ProjectCardDiscretText>{amount}</ProjectCardDiscretText>
        </ProjectCardColumns>
        <ProjectCardDiscretText>{deadline}</ProjectCardDiscretText>
      </ProjectCardColumns>
    </ProjectCardInfo>
  </ProjectCardWrapper>
)

ProjectCard.defaultProps = {
  progress: 0,
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
  shortDescription: PropTypes.string,
  category: PropTypes.string,
  picture: PropTypes.string,
  amount: PropTypes.string,
  progress: PropTypes.number,
  deadline: PropTypes.string,
}

export default ProjectCard
