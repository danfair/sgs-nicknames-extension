import styled, { css } from 'styled-components'

import { colors } from '../utils/config'

const Container = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const Input = styled.input`
  position: absolute;
  left: -99999px;
`

const Label = styled.label`
  background-color: white;
  padding: 1rem 1rem 1rem 3rem;
  display: block;
  cursor: pointer;
  transition: 0.3s background-color ease-in-out;

  ${(props) =>
    css`
      border: 2px solid ${props.isActive ? colors.blue : colors.gray};

      &:hover {
        background-color: ${props.isActive ? '#fff' : '#eee'};
      }
    `}
`

const Radio = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  top: 1.1rem;
  left: 1rem;
  border-radius: 1rem;

  ${(props) =>
    css`
      border: 2px solid ${props.isActive ? colors.blue : colors.gray};

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 1rem;
        width: 1rem;
        background-color: ${props.isActive ? colors.blue : '#fff'};
        border-radius: 0.5rem;
      }
    `}
`

const ItemTitle = styled.div`
  font-family: 'BrandonGrotesque-Bold';
  font-size: 1rem;

  ${(props) =>
    css`
      color: ${props.isActive ? colors.blue : colors.darkGray};
    `}
`

const ItemDescription = styled.div`
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
`

export default ({ option, handleModeChange, isActive }) => (
  <Container isActive={isActive}>
    <Input
      type="radio"
      value={option.value}
      name="sgs-nicknames-options"
      id={option.value}
      onClick={handleModeChange}
    />
    <Radio isActive={isActive} />
    <Label htmlFor={option.value} isActive={isActive}>
      <ItemTitle isActive={isActive}>{option.name}</ItemTitle>
      <ItemDescription
        dangerouslySetInnerHTML={{ __html: option.description }}
      />
    </Label>
  </Container>
)
