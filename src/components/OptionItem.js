import styled from 'styled-components'

import { colors } from '../utils/config'

const Container = styled.div`
  background-color: ${colors.blue};
`

export default ({ option, handleModeChange }) => (
  <Container>
    <input
      type="radio"
      value={option.value}
      name="sgs-nicknames-options"
      id={option.value}
      onClick={handleModeChange}
    />
    <label htmlFor={option.value}>{option.name}</label>
  </Container>
)
