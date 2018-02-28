import React from 'react'
import PropTypes from 'prop-types'

import { OwlEgg0, OwlEgg15, OwlEgg42, OwlEgg60, OwlEgg100 } from 'Icons'

const ProgressEgg = ({ progress }) => (
  <React.Fragment>
    {progress >= 100 && <OwlEgg100 />}
    {progress >= 60 && progress < 100 && <OwlEgg60 />}
    {progress >= 42 && progress < 60 && <OwlEgg42 />}
    {progress >= 15 && progress < 42 && <OwlEgg15 />}
    {progress < 15 && <OwlEgg0 />}
  </React.Fragment>
)

ProgressEgg.defaultProps = {
  progress: 0,
}

ProgressEgg.propTypes = {
  progress: PropTypes.number,
}

export default ProgressEgg
